import express from 'express';
import { 
  getStudentEnrollments, 
  getCourseEnrollments, 
  enrollStudent, 
  updateEnrollmentProgress,
  unenrollStudent 
} from '../controllers/enrollment.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

// All routes require authentication
router.use(verifyToken);

router.get('/student/:studentId', getStudentEnrollments);
router.get('/course/:courseId', getCourseEnrollments);
router.post('/', enrollStudent);
router.put('/:id', updateEnrollmentProgress);
router.delete('/:id', unenrollStudent);

export default router;
