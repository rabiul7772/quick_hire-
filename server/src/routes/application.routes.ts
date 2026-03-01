import { Router } from 'express';
import { createApplication } from '../controllers/application.controller';
import { protect } from '../middleware/auth.middleware';

const applicationRouter = Router();

applicationRouter.post('/', protect, createApplication);

export default applicationRouter;
