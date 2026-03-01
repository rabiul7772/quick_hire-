import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Button } from '../ui/Button';

export const AdminJobsHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-clash font-semibold text-neutral-100">
          Manage Jobs
        </h1>
        <p className="text-neutral-60 font-epilogue mt-1">
          View, add, and remove job postings from the platform.
        </p>
      </div>
      <Link to="/admin/jobs/new">
        <Button variant="primary" icon={<Plus className="w-5 h-5" />}>
          Add New Job
        </Button>
      </Link>
    </div>
  );
};
