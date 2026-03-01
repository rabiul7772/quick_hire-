import { Button } from '../../ui/Button';

interface JobFormSubmitProps {
  isSubmitting: boolean;
}

export const JobFormSubmit = ({ isSubmitting }: JobFormSubmitProps) => {
  return (
    <div className="pt-4 flex justify-end">
      <Button
        type="submit"
        isLoading={isSubmitting}
        className="w-full sm:w-auto"
      >
        Create job
      </Button>
    </div>
  );
};
