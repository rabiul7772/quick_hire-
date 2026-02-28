import { Router } from 'express';
import {
  getJobs,
  getJobById,
  createJob,
  deleteJob
} from '../controllers/job.controller';

const jobRouter = Router();

jobRouter.get('/', getJobs);
jobRouter.post('/', createJob);
jobRouter.get('/:id', getJobById);
jobRouter.delete('/:id', deleteJob);

export default jobRouter;
