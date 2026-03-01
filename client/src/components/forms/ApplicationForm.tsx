import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { useSubmitApplication } from '../../hooks/useJobs';
import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { ApplicationSuccessMessage } from './ApplicationSuccessMessage';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';

const applicationSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  resumeLink: z.string().url('Please enter a valid resume URL'),
  coverNote: z
    .string()
    .min(10, 'Cover note should be at least 10 characters')
    .max(1000, 'Cover note max 1000 characters')
});

type ApplicationFormValues = z.infer<typeof applicationSchema>;

export const ApplicationForm = ({
  jobId,
  onSuccess
}: {
  jobId: string;
  onSuccess?: () => void;
}) => {
  const { mutateAsync: submitApplication } = useSubmitApplication();
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: { name: '', email: '', resumeLink: '', coverNote: '' }
  });

  const onSubmit = async (data: ApplicationFormValues) => {
    setSubmitError('');
    try {
      await submitApplication({ jobId, ...data });
      setSubmitSuccess(true);
      onSuccess?.();
      reset();
    } catch (err: any) {
      setSubmitError(
        err.response?.data?.message ||
          'Something went wrong while submitting. Please try again later.'
      );
    }
  };

  if (submitSuccess) return <ApplicationSuccessMessage />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitError && (
        <div className="bg-accent-red/10 border border-accent-red text-accent-red p-4 flex items-start gap-3 rounded-lg">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm font-epilogue leading-relaxed">{submitError}</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          {...register('name')}
          label="Full Name *"
          placeholder="John Doe"
          error={errors.name?.message}
        />
        <Input
          {...register('email')}
          type="email"
          label="Email Address *"
          placeholder="john@example.com"
          error={errors.email?.message}
        />
      </div>
      <Input
        {...register('resumeLink')}
        label="Resume Link (URL) *"
        placeholder="https://drive.google.com/..."
        error={errors.resumeLink?.message}
      />
      <Textarea
        {...register('coverNote')}
        label="Cover Note *"
        placeholder="Tell us why you are a great fit..."
        error={errors.coverNote?.message}
      />
      <Button
        type="submit"
        isLoading={isSubmitting}
        className="w-full sm:w-auto px-10"
      >
        Submit Application
      </Button>
    </form>
  );
};
