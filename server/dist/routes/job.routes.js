import { Router } from 'express';
import { getJobs, getJobById, createJob, deleteJob, getCategoryCounts } from '../controllers/job.controller';
const jobRouter = Router();
jobRouter.get('/', getJobs);
jobRouter.get('/categories/count', getCategoryCounts);
jobRouter.post('/', createJob);
jobRouter.get('/:id', getJobById);
jobRouter.delete('/:id', deleteJob);
export default jobRouter;
//# sourceMappingURL=job.routes.js.map