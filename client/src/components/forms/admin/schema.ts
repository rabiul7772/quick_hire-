import { z } from 'zod';

export const createJobSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  company: z.string().min(1, 'Company is required'),
  companyLogo: z.url('Invalid company logo URL'),
  location: z.string().min(1, 'Location is required'),
  category: z.string().min(1, 'Category is required'),
  type: z.string().min(1, 'Job Type is required'),
  tags: z.string().min(1, 'At least one tag is required (comma separated)'),
  description: z
    .string()
    .min(10, 'Description should be at least 10 characters'),
  salary: z.string().optional(),
  isFeatured: z.boolean()
});

export interface CreateJobFormValues {
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  category: string;
  type: string;
  tags: string;
  description: string;
  salary?: string;
  isFeatured: boolean;
}
