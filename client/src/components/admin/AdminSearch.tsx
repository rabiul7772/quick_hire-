import { Search } from 'lucide-react';
import { Input } from '../ui/Input';

interface AdminSearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  totalJobs: number;
}

export const AdminSearch = ({
  searchTerm,
  setSearchTerm,
  totalJobs
}: AdminSearchProps) => {
  return (
    <div className="p-4 border-b border-neutral-20 flex justify-between items-center bg-neutral-0/10">
      <div className="w-full max-w-md">
        <Input
          type="text"
          placeholder="Search by title or company..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          icon={<Search className="w-5 h-5" />}
        />
      </div>
      <div className="text-sm font-epilogue text-neutral-60 hidden sm:block">
        Total Jobs:{' '}
        <span className="font-semibold text-neutral-100">{totalJobs}</span>
      </div>
    </div>
  );
};
