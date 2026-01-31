// this file contains routes for user-related operations
// imports

import express from "express"
import { verifyToken } from "../middleware/verifyToken.js";    // middlware to verify JWT token
import { verifyToken } from "../middleware/verifyToken.js";    // middlware to verify JWT token
import { deleteUser, getUser, getUsers, updateUser, getNotificationNumber, getAgents } from "../controllers/user.controller.js";
import { savePost } from "../controllers/post.controller.js";    

const router = express.Router();


router.get('/',isAdmin,getUsers);                             // Get all users
router.put('/:id',verifyToken, updateUser);           // Update a specific user by ID
router.delete('/:id',verifyToken, deleteUser);        // Delete a specific user by ID
router.post("/save", verifyToken, savePost);            // Save a post for the authenticated user
router.get("/notification", verifyToken, getNotificationNumber);  // Get the number of notifications 
export default router;