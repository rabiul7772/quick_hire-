import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { CreateJobFormValues } from './schema';
import { categories, jobTypes } from '../../../constants';
import { Select } from '../../ui/Select';

interface JobFormSelectsProps {
  register: UseFormRegister<CreateJobFormValues>;
  errors: FieldErrors<CreateJobFormValues>;
}

export const JobFormSelects = ({ register, errors }: JobFormSelectsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Select
        {...register('category')}
        label="Category *"
        error={errors.category?.message}
        options={[
          { value: '', label: 'Select a category' },
          ...categories.map(cat => ({ value: cat.name, label: cat.name }))
        ]}
      />
      <Select
        {...register('type')}
        label="Job Type *"
        error={errors.type?.message}
        options={jobTypes}
      />
    </div>
  );
};
