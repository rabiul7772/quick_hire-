import { z } from 'zod';
import mongoose from 'mongoose';

export const jobSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  company: z.string().min(1, 'Company is required'),
  location: z.string().min(1, 'Location is required'),
  category: z.string().min(1, 'Category is required'),
  description: z.string().min(1, 'Description is required')
});

export const applicationSchema = z.object({
  jobId: z.string().refine(val => mongoose.Types.ObjectId.isValid(val), {
    message: 'Invalid jobId format'
  }),
  name: z.string().min(1, 'Name is required'),
  email: z.email('Invalid email address'),
  resumeLink: z.url('Invalid resume link format'),
  coverNote: z.string().min(1, 'Cover note is required')
});
