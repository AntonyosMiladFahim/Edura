// api/controllers/user.controller.js
// this controller handles user-related operations such as getting user info, updating user info, deleting users, and fetching profile posts
// imports

import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

// controller to get all users
export const getUsers = async (req, res) => {
  try {
    // fetch all users from the database
    const users = await prisma.user.findMany();
    // respond with the list of users
    res.status(200).json(users);
  }catch (error) {
    // respond with error if fetching users fails
    res.status(500).json({ error: 'failed to get users' });
  }
};

// controller to get a specific user by ID
export const getUser = async (req, res) => {
  // extract user ID from request parameters
  const userId = req.params.id;

  // fetch the user from the database
  try {
    // find user by ID
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        firstName: true,
        lastName: true,
        fullName: true,
        avatar: true,
        bio: true,
        title: true,
        dob: true,
        age: true,
        gender: true,
        phone: true,
        address: true,
        department: true,
        office: true,
        qualifications: true,
        rating: true,
        hourlyRate: true,
        availability: true,
        officeHoursLink: true,
        attendancePercent: true,
        emergencyContact: true,
        interests: true,
        social: true,
        assignedToInstructorId: true,
        responsibilities: true,
        schedule: true,
        notes: true,
        parentId: true,
        createdAt: true,
        _count: {
          select: {
            enrolledCourses: true,
            createdCourses: true
          }
        }
      }
    });
    // if user not found, respond with error
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // respond with the user details
    res.status(200).json(user);
  } catch (error) {
    // respond with error if fetching user fails
    res.status(500).json({ error: 'failed to get user' });
  } 
};

// controller to update a specific user by ID
export const updateUser = async (req, res) => {
  // extract user ID from request parameters and authenticated user ID from token
  const userId = req.params.id;
  const tokenUserId = req.userId;
  const { password, avatar, passwordHash, ...body } = req.body;

  // ensure the authenticated user is updating their own profile
  if (userId !== tokenUserId) {
    return res.status(400).json({ error: 'You are not allowed to update this user' });
  }

  // hash the new password if provided  
  let updatedPassword = null;
  try {
    if (password) {
      // hash the new password
      updatedPassword = await bcrypt.hash(password, 10);
    }

    // update the user in the database 
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        ...body,
        ...(password && { passwordHash: updatedPassword }),
        ...(avatar && { avatar })
      },
    });
    // respond with the updated user details excluding the password
    const { passwordHash: userPassword, ...userWithoutPassword } = updatedUser;
    // respond with updated user data
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ error: 'failed to update user' });
  }
};

// controller to delete a specific user by ID
export const deleteUser = async (req, res) => {
  // extract user ID from request parameters and authenticated user ID from token
  const userId = req.params.id;
  const tokenUserId = req.userId;
  const {password,avatar, ...body} = req.body;

  // ensure the authenticated user is deleting their own profile
  if ( userId !== tokenUserId) {
    return res.status(400).json({ error: 'You are not allowed to update this user' });
  }

  // delete the user from the database
  try {
    await prisma.user.delete({
      where: { id: userId },
    });
  
    // respond with success message
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    // respond with error if deleting user fails
    res.status(500).json({ error: 'failed to delete user' });
  }
};