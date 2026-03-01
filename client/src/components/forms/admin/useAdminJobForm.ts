import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useCreateJob } from '../../../hooks/useJobs';
import { createJobSchema } from './schema';
import type { CreateJobFormValues } from './schema';

export const useAdminJobForm = () => {
  const navigate = useNavigate();
  const { mutateAsync: createJob } = useCreateJob();
  const [submitError, setSubmitError] = useState('');

  const form = useForm<CreateJobFormValues>({
    resolver: zodResolver(createJobSchema),
    defaultValues: {
      title: '',
      company: '',
      companyLogo: '',
      location: '',
      category: '',
      type: '',
      tags: '',
      description: '',
      salary: '',
      isFeatured: false
    }
  });

  const onSubmit = async (data: CreateJobFormValues) => {
    setSubmitError('');
    try {
      const formattedData: Record<string, unknown> = {
        ...data,
        tags: data.tags
          .split(',')
          .map(tag => tag.trim())
          .filter(Boolean)
      };
      await createJob(formattedData);
      toast.success('Job created successfully!');
      navigate('/admin/jobs');
    } catch (err: any) {
      const message =
        err.response?.data?.message ||
        'Something went wrong while creating the job.';
      setSubmitError(message);
      toast.error(message);
    }
  };

  return { ...form, onSubmit, submitError };
};
