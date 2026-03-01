import { AlertCircle } from 'lucide-react';
import { JobFormBasicInputs } from './admin/JobFormBasicInputs';
import { JobFormSelects } from './admin/JobFormSelects';
import { JobFormDetails } from './admin/JobFormDetails';
import { JobFormSubmit } from './admin/JobFormSubmit';
import { useAdminJobForm } from './admin/useAdminJobForm';

export const CreateJobForm = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    formState: { errors, isSubmitting },
    submitError
  } = useAdminJobForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitError && (
        <div className="bg-accent-red/10 border border-accent-red text-accent-red p-4 flex items-start gap-3 rounded-md">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-sm font-epilogue leading-relaxed">{submitError}</p>
        </div>
      )}

      <JobFormBasicInputs register={register} errors={errors} />
      <JobFormSelects register={register} errors={errors} />
      <JobFormDetails register={register} errors={errors} />
      <JobFormSubmit isSubmitting={isSubmitting} />
    </form>
  );
};
