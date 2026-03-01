import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useJobById } from '../hooks/useJobs';
import { ApplicationForm } from '../components/forms/ApplicationForm';
import { JobDetailHeader } from '../components/job-details/JobDetailHeader';
import { JobDescription } from '../components/job-details/JobDescription';
import { JobSidebar } from '../components/job-details/JobSidebar';

export const JobDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: jobResponse, isLoading, isError } = useJobById(id || '');
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    // Reset submitted state when form is closed/opened
    if (!showApplicationForm) {
      setIsSubmitted(false);
    }
  }, [showApplicationForm]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-0/30 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (isError || !jobResponse?.data) {
    return (
      <div className="min-h-screen bg-neutral-0/30 flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-clash font-semibold text-neutral-100 mb-4">
          Job Not Found
        </h2>
        <p className="text-neutral-60 font-epilogue mb-8">
          The job you are looking for does not exist or has been removed.
        </p>
        <Link
          to="/jobs"
          className="px-6 py-3 bg-brand-primary text-white font-bold font-epilogue transition-colors hover:bg-brand-secondary"
        >
          Browse All Jobs
        </Link>
      </div>
    );
  }

  const job = jobResponse.data;

  return (
    <div className="min-h-screen bg-neutral-0/30 pb-20">
      <JobDetailHeader
        job={job}
        showApplicationForm={showApplicationForm}
        setShowApplicationForm={setShowApplicationForm}
      />

      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-10">
          {showApplicationForm ? (
            <div className="bg-white p-8 md:p-10 border border-neutral-20 shadow-sm">
              {!isSubmitted && (
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-neutral-20">
                  <h2 className="text-2xl font-clash font-semibold text-neutral-100">
                    Submit Application
                  </h2>
                  <button
                    onClick={() => setShowApplicationForm(false)}
                    className="px-4 py-2 text-accent-red border border-accent-red font-epilogue text-sm font-medium rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              )}
              <ApplicationForm
                jobId={job._id || ''}
                onSuccess={() => setIsSubmitted(true)}
              />
            </div>
          ) : (
            <JobDescription description={job.description} />
          )}
        </div>
        <JobSidebar job={job} />
      </div>
    </div>
  );
};
