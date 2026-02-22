import express from 'express';
import { 
  getPartitionById, 
  createPartition, 
  updatePartition, 
  deletePartition 
} from '../controllers/partition.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

// All routes require authentication
router.use(verifyToken);

router.get('/:id', getPartitionById);
router.post('/', createPartition);
router.put('/:id', updatePartition);
router.delete('/:id', deletePartition);

export default router;
