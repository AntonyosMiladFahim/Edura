import express from 'express';
import { 
  getAllCourses, 
  getCourseDetails, 
  addCourse, 
  updateCourse, 
  deleteCourse 
} from '../controllers/course.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

// Public routes
router.get('/', getAllCourses);
router.get('/:id', getCourseDetails);

// Protected routes (require authentication)
router.post('/', verifyToken, addCourse);
router.put('/:id', verifyToken, updateCourse);
router.delete('/:id', verifyToken, deleteCourse);

export default router;
