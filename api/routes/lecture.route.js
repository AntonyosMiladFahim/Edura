import express from 'express';
import { 
  getLectureById, 
  createLecture, 
  updateLecture, 
  deleteLecture,
  getLectureAccessCode,
  updateLectureProgress,
  getLectureProgress
} from '../controllers/lecture.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

// All routes require authentication
router.use(verifyToken);

router.get('/:id', getLectureById);
router.post('/', createLecture);
router.put('/:id', updateLecture);
router.delete('/:id', deleteLecture);

// Access code and progress tracking
router.get('/:lectureId/access-code', getLectureAccessCode);
router.get('/:lectureId/progress', getLectureProgress);
router.put('/:lectureId/progress', updateLectureProgress);

export default router;
