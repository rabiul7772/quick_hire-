import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { JobCard } from '../components/ui/JobCard';
import { useAllJobs } from '../hooks/useJobs';

export const AllJobsPage = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || undefined;
  const location = searchParams.get('location') || 'Remote';
  const category = searchParams.get('category') || undefined;

  const { data, isLoading, isError } = useAllJobs({
    search,
    location,
    category
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="px-6 lg:px-[124px] py-20 bg-neutral-0/30 min-h-screen">
      <div className="flex items-center justify-between mb-12">
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 text-neutral-60 hover:text-brand-primary transition-colors mb-4 font-epilogue"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-clash font-semibold text-neutral-100 leading-tight">
            All <span className="text-accent-blue">Jobs</span>
          </h1>
          {data && (
            <p className="text-neutral-60 mt-3 text-lg font-epilogue">
              Showing {data.data.length} jobs
            </p>
          )}
        </div>
      </div>

      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-64 bg-neutral-10 animate-pulse rounded" />
          ))}
        </div>
      )}

      {isError && (
        <p className="text-center text-neutral-60 py-10">
          Failed to load jobs. Please try again later.
        </p>
      )}

      {data && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.data.map(job => (
            <JobCard
              key={job._id}
              id={job._id}
              logo={job.companyLogo}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
              description={job.description}
              tags={job.tags}
            />
          ))}
        </div>
      )}

      {data && data.data.length === 0 && (
        <p className="text-center text-neutral-60 py-10 text-lg font-epilogue">
          No jobs found.
        </p>
      )}
    </section>
  );
};
