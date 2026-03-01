import { Router } from 'express';
import { createApplication } from '../controllers/application.controller.js';
import { protect } from '../middleware/auth.middleware.js';

const applicationRouter = Router();

applicationRouter.post('/', protect, createApplication);

export default applicationRouter;
