import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { useAllJobs, useDeleteJob } from '../../hooks/useJobs';
import { AdminJobsTable } from '../../components/admin/AdminJobsTable';
import { AdminJobsHeader } from '../../components/admin/AdminJobsHeader';
import { AdminSearch } from '../../components/admin/AdminSearch';

export const AdminJobsPage = () => {
  const { data: jobsResponse, isLoading, isError } = useAllJobs();
  const { mutateAsync: deleteJob } = useDeleteJob();
  const [searchTerm, setSearchTerm] = useState('');
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDelete = async (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      try {
        setIsDeleting(id);
        await deleteJob(id);
        toast.success(`Job "${title}" deleted successfully`);
      } catch (error) {
        toast.error('Failed to delete the job. Please try again.');
        console.error('Delete job error', error);
      } finally {
        setIsDeleting(null);
      }
    }
  };

  const jobs = jobsResponse?.data || [];
  const filteredJobs = jobs.filter(
    job =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-neutral-0/30 px-6 lg:px-[124px] py-5">
      <AdminJobsHeader />
      <div className="bg-white border border-neutral-20 rounded-xl overflow-hidden shadow-sm">
        <AdminSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          totalJobs={jobs.length}
        />
        <AdminJobsTable
          jobs={filteredJobs}
          isLoading={isLoading}
          isError={isError}
          searchTerm={searchTerm}
          isDeleting={isDeleting}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};
