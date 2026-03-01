import { Router } from 'express';
import { createApplication } from '../controllers/application.controller';
const applicationRouter = Router();
applicationRouter.post('/', createApplication);
export default applicationRouter;
//# sourceMappingURL=application.routes.js.map