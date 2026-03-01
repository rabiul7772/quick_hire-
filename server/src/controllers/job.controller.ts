import { Request, Response } from 'express';
import { Job } from '../models/job.model.js';
import { jobSchema } from '../validators/schema.js';

export const getJobs = async (req: Request, res: Response) => {
  try {
    const { isFeatured, limit, search, location, category } = req.query;
    const filter: Record<string, unknown> = {};

    if (isFeatured === 'true') filter.isFeatured = true;
    if (category) filter.category = category;

    if (search) {
      filter.$or = [
        { title: { $regex: search as string, $options: 'i' } },
        { company: { $regex: search as string, $options: 'i' } }
      ];
    }

    if (location) {
      filter.location = { $regex: location as string, $options: 'i' };
    }

    const query = Job.find(filter).sort({ createdAt: -1 });

    if (limit) query.limit(Number(limit));

    const jobs = await query;
    res.status(200).json({ success: true, data: jobs });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Server error while fetching jobs' });
  }
};

export const getCategoryCounts = async (req: Request, res: Response) => {
  try {
    const counts = await Job.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          name: '$_id',
          count: 1,
          _id: 0
        }
      }
    ]);

    res.status(200).json({ success: true, data: counts });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error while fetching category counts'
    });
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
    res.status(500).json({
      success: false,
      message: 'Server error while fetching job by ID'
    });
  }
};

export const createJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const validatedData = jobSchema.safeParse(req.body);

    if (!validatedData.success) {
      res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: validatedData.error.issues
      });
      return;
    }

    // Remove undefined values to satisfy Mongoose's exactOptionalPropertyTypes
    const cleanedData = Object.fromEntries(
      Object.entries(validatedData.data).filter(([_, v]) => v !== undefined)
    );
    const newJob = await Job.create(cleanedData);
    res.status(201).json({ success: true, data: newJob });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: 'Server error while creating job' });
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
      .json({ success: false, message: 'Server error while deleting job' });
  }
};
