import { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Loader2, Trash2 } from 'lucide-react';
import type { Job } from '../../types/job';
import { ADMIN_JOBS_PER_PAGE } from '../../constants';
import { Pagination } from './Pagination';

interface AdminJobsTableProps {
  jobs: Job[];
  isLoading: boolean;
  isError: boolean;
  searchTerm: string;
  isDeleting: string | null;
  onDelete: (id: string, title: string) => void;
}

export const AdminJobsTable = ({
  jobs,
  isLoading,
  isError,
  searchTerm,
  isDeleting,
  onDelete
}: AdminJobsTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = ADMIN_JOBS_PER_PAGE;

  // Reset to first page when search changes or jobs update
  useEffect(() => {
    setCurrentPage(1);
  }, [jobs.length, searchTerm]);

  const totalPages = Math.ceil(jobs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedJobs = jobs.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-neutral-0/30 border-b border-neutral-20 font-epilogue text-sm text-neutral-60">
              <th className="py-4 px-6 font-semibold whitespace-nowrap">
                Job Title
              </th>
              <th className="py-4 px-6 font-semibold min-w-[200px]">Company</th>
              <th className="py-4 px-6 font-semibold">Location</th>
              <th className="py-4 px-6 font-semibold">Posted Date</th>
              <th className="py-4 px-6 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-20">
            {isLoading ? (
              <tr>
                <td colSpan={5} className="py-12 text-center">
                  <Loader2 className="w-8 h-8 text-brand-primary animate-spin mx-auto mb-4" />
                  <p className="text-neutral-60 font-epilogue">
                    Loading jobs...
                  </p>
                </td>
              </tr>
            ) : isError ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-12 text-center text-accent-red font-epilogue"
                >
                  Failed to load jobs. Please try refreshing the page.
                </td>
              </tr>
            ) : jobs.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-12 text-center text-neutral-60 font-epilogue"
                >
                  {searchTerm
                    ? `No jobs found matching "${searchTerm}"`
                    : 'No jobs posted yet.'}
                </td>
              </tr>
            ) : (
              paginatedJobs.map(job => (
                <tr
                  key={job._id}
                  className="hover:bg-neutral-0/10 transition-colors"
                >
                  <td
                    className="py-4 px-6 font-semibold text-neutral-100 font-epilogue max-w-[300px] truncate"
                    title={job.title}
                  >
                    <RouterLink
                      to={`/jobs/${job._id}`}
                      className="hover:text-brand-primary hover:underline transition-colors"
                    >
                      {job.title}
                    </RouterLink>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={job.companyLogo}
                        alt={job.company}
                        className="w-8 h-8 object-contain rounded bg-neutral-10 p-1 shrink-0"
                      />
                      <span className="font-epilogue text-neutral-80">
                        {job.company}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-epilogue text-neutral-80">
                    {job.location}
                  </td>
                  <td className="py-4 px-6 font-epilogue text-neutral-80">
                    {new Date(job.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => onDelete(job._id || '', job.title)}
                      disabled={isDeleting === job._id}
                      className="p-2 text-neutral-60 hover:text-accent-red hover:bg-accent-red/10 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      title="Delete Job"
                    >
                      {isDeleting === job._id ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Trash2 className="w-5 h-5" />
                      )}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={jobs.length}
        itemsPerPage={itemsPerPage}
        startIndex={startIndex}
        onPageChange={goToPage}
      />
    </div>
  );
};
