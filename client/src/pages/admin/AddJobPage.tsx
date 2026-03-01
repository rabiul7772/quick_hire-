import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CreateJobForm } from '../../components/forms/CreateJobForm';

export const AddJobPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-0/30 px-6 lg:px-[124px] py-12">
      <Link
        to="/admin/jobs"
        className="flex items-center gap-2 text-neutral-60 hover:text-brand-primary transition-colors mb-8 font-epilogue w-fit"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Manage Jobs
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-clash font-semibold text-neutral-100 mb-2">
          Add New Job
        </h1>
        <p className="text-neutral-60 font-epilogue mb-8">
          Create a new job posting to be displayed on the platform.
        </p>

        <div className="bg-white border border-neutral-20 rounded-xl p-8 shadow-sm justify-between w-full h-full">
          <CreateJobForm />
        </div>
      </div>
    </div>
  );
};
