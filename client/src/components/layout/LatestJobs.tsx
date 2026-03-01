import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { JobRow } from '../ui/JobRow';
import { useLatestJobs } from '../../hooks/useJobs';

export const LatestJobs = () => {
  const { data, isLoading, isError } = useLatestJobs(8);

  return (
    <section className="px-6 lg:px-[124px] py-20 bg-neutral-0/30">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl lg:text-5xl font-clash font-semibold text-neutral-100 leading-tight">
          Latest <span className="text-accent-blue font-clash">jobs open</span>
        </h2>
        <Link
          to="/jobs"
          className="flex items-center gap-2 text-brand-primary font-bold hover:underline transition-all cursor-pointer"
        >
          Show all jobs
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {isLoading && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-32 bg-neutral-10 animate-pulse rounded-lg"
            />
          ))}
        </div>
      )}

      {isError && (
        <p className="text-center text-neutral-60 py-10">
          Failed to load latest jobs. Please try again later.
        </p>
      )}

      {data && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {data.data.map(job => (
            <JobRow
              key={job._id}
              id={job._id}
              logo={job.companyLogo}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
              tags={job.tags}
            />
          ))}
        </div>
      )}
    </section>
  );
};
