import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { CreateJobFormValues } from './schema';
import { Input } from '../../ui/Input';
import { Textarea } from '../../ui/Textarea';

interface JobFormDetailsProps {
  register: UseFormRegister<CreateJobFormValues>;
  errors: FieldErrors<CreateJobFormValues>;
}

export const JobFormDetails = ({ register, errors }: JobFormDetailsProps) => {
  return (
    <>
      <Input
        {...register('tags')}
        label="Tags (Comma Separated) *"
        placeholder="e.g. React, Node, Full-stack"
        error={errors.tags?.message}
      />

      <Input
        {...register('salary')}
        label="Salary Range (Optional)"
        placeholder="e.g. $100k - $120k / year"
        error={errors.salary?.message}
      />

      <Textarea
        {...register('description')}
        label="Job Description *"
        placeholder="Detailed responsibilities, requirements, benefits, etc."
        error={errors.description?.message}
      />

      <div className="flex items-center gap-3 py-2">
        <input
          type="checkbox"
          id="isFeatured"
          {...register('isFeatured')}
          className="w-5 h-5 accent-brand-primary border-neutral-20 rounded"
        />
        <label
          htmlFor="isFeatured"
          className="text-sm font-bold text-neutral-100 font-epilogue"
        >
          Feature this job on the homepage
        </label>
      </div>
    </>
  );
};
