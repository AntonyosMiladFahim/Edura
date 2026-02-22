import express from 'express';
import { 
  getAllGrades, 
  getGradeById, 
  createGrade, 
  updateGrade, 
  deleteGrade 
} from '../controllers/grade.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

// Public routes
router.get('/', getAllGrades);
router.get('/:id', getGradeById);

// Protected routes (Admin only)
router.post('/', verifyToken, createGrade);
router.put('/:id', verifyToken, updateGrade);
router.delete('/:id', verifyToken, deleteGrade);

export default router;
