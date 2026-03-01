import { Router } from 'express';
import {
  getJobs,
  getJobById,
  createJob,
  deleteJob,
  getCategoryCounts
} from '../controllers/job.controller';
import { protect, restrictTo } from '../middleware/auth.middleware';

const jobRouter = Router();

jobRouter.get('/', getJobs);
jobRouter.get('/categories/count', getCategoryCounts);

// Protected routes
jobRouter.post('/', protect, restrictTo('admin'), createJob);
jobRouter.get('/:id', protect, getJobById);
jobRouter.delete('/:id', protect, restrictTo('admin'), deleteJob);

export default jobRouter;
