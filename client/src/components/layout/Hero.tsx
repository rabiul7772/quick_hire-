import { Search, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="bg-neutral-0 px-6 lg:px-[124px] pt-20 pb-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative">
      <div className="flex-1 flex flex-col gap-6 relative z-20">
        <div className="max-w-[629px] flex flex-col gap-6">
          <h1 className="text-5xl lg:text-[72px] leading-[1.1] font-clash font-semibold text-neutral-100 italic">
            Discover more than{' '}
            <span className="text-accent-blue not-italic">5000+ Jobs</span>
          </h1>
          <img src="/images/vector.png" alt="vector" className="w-fit h-auto" />
          <p className="text-xl text-neutral-80 leading-relaxed font-epilogue">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </p>
        </div>

        <div className="bg-white p-4 shadow-xl border border-neutral-20 flex flex-col md:flex-row items-center gap-4 mt-8 lg:w-[130%] lg:max-w-[850px] relative z-30">
          <div className="flex-1 flex items-center gap-3 px-4 border-b md:border-b-0 md:border-r border-neutral-20 pb-4 md:pb-0">
            <Search className="w-5 h-5 text-brand-primary" />
            <input
              type="text"
              placeholder="Job title or keyword"
              className="w-full outline-none text-neutral-100 font-medium placeholder:text-neutral-80/50"
            />
          </div>
          <div className="flex-1 flex items-center gap-3 px-4 pb-4 md:pb-0">
            <MapPin className="w-5 h-5 text-brand-primary" />
            <select className="w-full outline-none text-neutral-100 font-medium bg-transparent cursor-pointer">
              <option>Florence, Italy</option>
              <option>Remote</option>
              <option>New York, USA</option>
            </select>
          </div>
          <Button
            variant="primary"
            size="lg"
            className="w-full md:w-auto px-10"
          >
            Search my job
          </Button>
        </div>

        <p className="text-neutral-80 font-epilogue mt-4">
          Popular :{' '}
          <span className="font-semibold text-neutral-100">
            UI Designer, UX Researcher, Android, Admin
          </span>
        </p>
      </div>

      <div className="flex-1 hidden lg:block relative z-10">
        {/* Image from Figma */}
        <div className="relative w-[500px]">
          <img src="/images/hero.png" alt="hero" className="w-full h-auto" />
        </div>
      </div>

      {/* Background patterns from Figma */}
      <div className="absolute top-0 right-0 z-0 w-full h-full opacity-30 pointer-events-none">
        <img
          src="/images/pattern.png"
          alt="pattern"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
