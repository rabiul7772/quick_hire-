import { ArrowRight } from 'lucide-react';
import { JobRow } from '../ui/JobRow';
import { latestJobs } from '../../constants';

export const LatestJobs = () => {
  return (
    <section className="px-6 lg:px-[124px] py-20 bg-neutral-0/30">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl lg:text-5xl font-clash font-semibold text-neutral-100 leading-tight">
          Latest <span className="text-accent-blue font-clash">jobs open</span>
        </h2>
        <button className="flex items-center gap-2 text-brand-primary font-bold hover:underline transition-all">
          Show all jobs
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {latestJobs.map((job, index) => (
          <JobRow key={index} {...job} />
        ))}
      </div>
    </section>
  );
};
