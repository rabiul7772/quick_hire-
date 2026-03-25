import { Router } from 'express';
import type { Request, Response } from 'express';

const healthCheckRouter = Router();

healthCheckRouter.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: 'active',
    message: 'Quick hire API is running!',
    timestamp: new Date().toISOString()
  });
});

export default healthCheckRouter;
