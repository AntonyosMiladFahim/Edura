import bcrypt from "bcrypt";
import prisma from '../lib/prisma.js';
import jwt from "jsonwebtoken";

// 1. REGISTER CONTROLLER
export const register = async (req, res) => {
    const { username, email, password, role, parentId } = req.body;

    try {
        // Basic validation: Check if user exists
        const userExists = await prisma.user.findFirst({
            where: { OR: [{ username }, { email }] }
        });
        if (userExists) return res.status(400).json({ message: "Username or Email already taken" });

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                passwordHash: hashedPassword, // Match schema field name
                role: role || 'STUDENT',
                // If the user is a student, they might have a parent link
                ...(parentId && { parentId }) 
            },
        });

        res.status(201).json({
            message: 'User created successfully',
            user: {
                id: newUser.id,
                username: newUser.username,
                role: newUser.role
            },
        }); 
    
    } catch (err) {
        console.error('Registration Error:', err);
        return res.status(500).json({ error: 'Failed to create user' });
    } 
};

// 2. LOGIN CONTROLLER
export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: { username }
        });
        
        if (!user) return res.status(401).json({ message: "Invalid Credentials!" });

        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

        if (!isPasswordValid) return res.status(401).json({ message: "Invalid Credentials!" });

        // IMPORTANT: Include 'role' in the payload for your middleware
        const age = 1000 * 60 * 60 * 24 * 7;
        const token = jwt.sign(
            { 
                id: user.id, 
                role: user.role // Now middleware can access req.userRole
            },
            process.env.jwt_secret_key,
            { expiresIn: '7d' }
        );

        const isProduction = process.env.NODE_ENV === "production";
        
        res.cookie("token", token, {
            httpOnly: true,
            secure: isProduction,
            sameSite: isProduction ? "none" : "lax",
            maxAge: age,
        }).status(200).json({
            message: "Login successful",
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role, // Return role to frontend for UI logic
            }
        }); 
    } catch (err) {
        console.error('Login Error:', err);
        return res.status(500).json({ error: 'Failed to login' });
    }
};

// 3. LOGOUT CONTROLLER
export const logout = (req, res) => {
    const isProduction = process.env.NODE_ENV === "production";
    res.clearCookie("token", {
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction ? "none" : "lax",
    }).status(200).json({ message: "Logout successful!" });
};