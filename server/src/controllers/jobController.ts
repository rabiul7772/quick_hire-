import { Request, Response } from 'express';
import { Job } from '../models/Job';
import { jobSchema } from '../validators/schema';

export const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: jobs });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Server error fetching jobs' });
  }
};

export const getJobById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      res.status(404).json({ success: false, message: 'Job not found' });
      return;
    }
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Server error fetching job by ID' });
  }
};

export const createJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const validatedData = jobSchema.safeParse(req.body);

    if (!validatedData.success) {
      res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: validatedData.error.errors
      });
      return;
    }

    const newJob = await Job.create(validatedData.data);
    res.status(201).json({ success: true, data: newJob });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Server error creating job' });
  }
};

export const deleteJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      res.status(404).json({ success: false, message: 'Job not found' });
      return;
    }
    res
      .status(200)
      .json({ success: true, message: 'Job deleted successfully' });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Server error deleting job' });
  }
};
