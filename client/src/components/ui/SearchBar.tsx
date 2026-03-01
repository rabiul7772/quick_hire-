import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';
import { Button } from './Button';

export const SearchBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('Remote');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (location) params.append('location', location);

    navigate(`/jobs?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-white p-4 shadow-xl border border-neutral-20 flex flex-col md:flex-row items-center gap-4 mt-8 lg:w-[130%] lg:max-w-[850px] relative z-30"
    >
      <div className="flex-1 flex items-center gap-3 px-4 border-b md:border-b-0 md:border-r border-neutral-20 pb-4 md:pb-0">
        <Search className="w-5 h-5 text-brand-primary" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Job title or keyword"
          className="w-full outline-none text-neutral-100 font-medium placeholder:text-neutral-80/50"
        />
      </div>
      <div className="flex-1 flex items-center gap-3 px-4 pb-4 md:pb-0">
        <MapPin className="w-5 h-5 text-brand-primary" />
        <select
          value={location}
          onChange={e => setLocation(e.target.value)}
          className="w-full outline-none text-neutral-100 font-medium bg-transparent cursor-pointer"
        >
          <option value="">Select location</option>
          <option value="Remote">Remote</option>
          <option value="Florence, Italy">Florence, Italy</option>
          <option value="New York, USA">New York, USA</option>
        </select>
      </div>
      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full md:w-auto px-10"
      >
        Search my job
      </Button>
    </form>
  );
};
