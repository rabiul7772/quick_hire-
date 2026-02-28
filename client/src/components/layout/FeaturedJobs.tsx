import { ArrowRight } from 'lucide-react';
import { JobCard } from '../ui/JobCard';
import { featuredJobs } from '../../constants';

export const FeaturedJobs = () => {
  return (
    <section className="px-6 lg:px-[124px] py-20 bg-white">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl lg:text-5xl font-clash font-semibold text-neutral-100 leading-tight">
          Featured <span className="text-accent-blue font-clash">jobs</span>
        </h2>
        <button className="flex items-center gap-2 text-brand-primary font-bold hover:underline transition-all">
          Show all jobs
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredJobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </section>
  );
};
