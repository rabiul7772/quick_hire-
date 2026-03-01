import type { UseFormRegister, FieldErrors } from 'react-hook-form';
import type { CreateJobFormValues } from './schema';
import { Input } from '../../ui/Input';

interface JobFormBasicInputsProps {
  register: UseFormRegister<CreateJobFormValues>;
  errors: FieldErrors<CreateJobFormValues>;
}

export const JobFormBasicInputs = ({
  register,
  errors
}: JobFormBasicInputsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          {...register('title')}
          label="Job Title *"
          placeholder="e.g. Senior Product Designer"
          error={errors.title?.message}
        />
        <Input
          {...register('company')}
          label="Company Name *"
          placeholder="e.g. Acme Corp"
          error={errors.company?.message}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          {...register('companyLogo')}
          label="Company Logo URL *"
          placeholder="https://example.com/logo.png"
          error={errors.companyLogo?.message}
        />
        <Input
          {...register('location')}
          label="Location *"
          placeholder="e.g. Remote, or New York, NY"
          error={errors.location?.message}
        />
      </div>
    </>
  );
};
