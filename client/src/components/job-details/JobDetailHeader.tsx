import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Building2, Briefcase } from 'lucide-react';
import type { Job } from '../../types/job';

interface JobDetailHeaderProps {
  job: Job;
  showApplicationForm: boolean;
  setShowApplicationForm: (show: boolean) => void;
}

export const JobDetailHeader = ({
  job,
  showApplicationForm,
  setShowApplicationForm
}: JobDetailHeaderProps) => {
  return (
    <div className="bg-white border-b border-neutral-20">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <Link
          to="/jobs"
          className="flex items-center gap-2 text-neutral-60 hover:text-brand-primary transition-colors mb-8 font-epilogue w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to jobs
        </Link>

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 p-2 border border-neutral-20 bg-white flex items-center justify-center shrink-0">
              <img
                src={job.companyLogo}
                alt={job.company}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-clash font-semibold text-neutral-100 mb-4 leading-tight">
                {job.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-neutral-80 font-epilogue text-lg">
                <span className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-brand-primary" />
                  {job.company}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                  {job.location}
                </span>
                <span className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-brand-primary" />
                  {job.type}
                </span>
              </div>
            </div>
          </div>

          {!showApplicationForm && (
            <button
              onClick={() => setShowApplicationForm(true)}
              className="px-8 py-4 bg-brand-primary  text-white font-bold font-epilogue text-lg transition-colors shrink-0 shadow-lg"
            >
              Apply Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
