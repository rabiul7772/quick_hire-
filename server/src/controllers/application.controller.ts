import { Request, Response } from 'express';
import { Application } from '../models/application.model.js';
import { applicationSchema } from '../validators/schema.js';

export const createApplication = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const validatedData = applicationSchema.safeParse(req.body);

    if (!validatedData.success) {
      res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: validatedData.error.issues
      });
      return;
    }

    const newApplication = await Application.create(validatedData.data);
    res.status(201).json({ success: true, data: newApplication });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Server error submitting application' });
  }
};
