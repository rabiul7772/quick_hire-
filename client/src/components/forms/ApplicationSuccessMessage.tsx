import { CheckCircle2 } from 'lucide-react';

export const ApplicationSuccessMessage = () => {
  return (
    <div className="bg-accent-green/10 border border-accent-green text-accent-green p-8 text-center flex flex-col items-center justify-center gap-4">
      <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center">
        <CheckCircle2 className="w-8 h-8 text-accent-green" />
      </div>
      <div>
        <h3 className="text-2xl font-semibold font-epilogue mb-2">
          Application Submitted!
        </h3>
        <p className="text-neutral-80 font-epilogue">
          Thank you for applying. The hiring team will review your application
          and get back to you soon.
        </p>
      </div>
    </div>
  );
};
