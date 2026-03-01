import type { Job } from '../../types/job';

interface JobSidebarProps {
  job: Job;
}

export const JobSidebar = ({ job }: JobSidebarProps) => {
  return (
    <div className="space-y-8">
      <div className="bg-white p-6 border border-neutral-20">
        <h3 className="text-xl font-clash font-semibold text-neutral-100 mb-6 pb-4 border-b border-neutral-20">
          Job Overview
        </h3>

        <div className="space-y-6">
          <div>
            <p className="text-neutral-60 font-epilogue text-sm mb-1">
              Posted On
            </p>
            <p className="font-epilogue font-medium text-neutral-100">
              {new Date(job.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          </div>

          <div>
            <p className="text-neutral-60 font-epilogue text-sm mb-1">
              Category
            </p>
            <p className="font-epilogue font-medium text-neutral-100">
              {job.category}
            </p>
          </div>

          <div>
            <p className="text-neutral-60 font-epilogue text-sm mb-1">
              Job Type
            </p>
            <p className="font-epilogue font-medium text-neutral-100">
              {job.type}
            </p>
          </div>

          {job.salary && (
            <div>
              <p className="text-neutral-60 font-epilogue text-sm mb-1">
                Salary
              </p>
              <p className="font-epilogue font-medium text-neutral-100">
                {job.salary}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white p-6 border border-neutral-20">
        <h3 className="text-xl font-clash font-semibold text-neutral-100 mb-6 pb-4 border-b border-neutral-20">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {job.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-neutral-10 text-neutral-80 text-sm font-semibold font-epilogue rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
