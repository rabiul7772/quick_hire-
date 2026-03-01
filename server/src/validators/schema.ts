import { z } from 'zod';
import mongoose from 'mongoose';

export const jobSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  company: z.string().min(1, 'Company is required'),
  companyLogo: z.string().url('Invalid company logo URL'),
  location: z.string().min(1, 'Location is required'),
  category: z.string().min(1, 'Category is required'),
  type: z.string().min(1, 'Type is required'),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
  description: z.string().min(1, 'Description is required'),
  salary: z.string().optional(),
  isFeatured: z.boolean().default(false)
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
