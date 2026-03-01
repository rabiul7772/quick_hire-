import { cn } from '../../utils/cn';
import { Link } from 'react-router-dom';

interface JobRowProps {
  id?: string;
  logo: string;
  title: string;
  company: string;
  location: string;
  type: string;
  tags: string[];
}

export const JobRow = ({
  id,
  logo,
  title,
  company,
  location,
  type,
  tags
}: JobRowProps) => {
  // Filter out the job type from tags to prevent double display
  const filteredTags = tags.filter(tag => tag !== type);

  const rowContent = (
    <div className="p-6 bg-white border border-neutral-10 hover:border-brand-primary transition-all cursor-pointer group rounded-lg h-full">
      <div className="flex items-center gap-8">
        <div className="w-20 h-20 flex items-center justify-center p-0 overflow-hidden">
          <img
            src={logo}
            alt={company}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <h3 className="text-2xl font-semibold text-[#25324B] font-epilogue group-hover:text-brand-primary transition-colors leading-tight">
            {title}
          </h3>
          <p className="text-neutral-60 font-epilogue text-lg flex items-center gap-2">
            {company}{' '}
            <span className="w-1.5 h-1.5 bg-neutral-20 rounded-full" />{' '}
            {location}
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <span className="px-3 py-1.5 border border-[#4640DE] text-[#4640DE] text-sm font-semibold font-epilogue">
              {type}
            </span>
            <span className="w-px h-5 bg-neutral-20 self-center hidden sm:block" />
            <div className="flex flex-wrap gap-2">
              {filteredTags.map(tag => {
                const tagStyles: Record<string, string> = {
                  Design: 'bg-[#56CDAD]/10 text-[#56CDAD]',
                  Marketing: 'bg-[#FFB836]/10 text-[#FFB836]',
                  Business: 'bg-accent-purple/10 text-accent-purple',
                  Technology: 'bg-accent-red/10 text-accent-red',
                  Engineering: 'bg-accent-red/10 text-accent-red',
                  Finance: 'bg-accent-green/10 text-accent-green',
                  Sales: 'bg-accent-gold/10 text-accent-gold'
                };

                return (
                  <span
                    key={tag}
                    className={cn(
                      'px-4 py-1.5 rounded-full text-sm font-semibold font-epilogue',
                      tagStyles[tag] || 'bg-brand-primary/10 text-brand-primary'
                    )}
                  >
                    {tag}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (id) {
    return (
      <Link to={`/jobs/${id}`} className="block h-full">
        {rowContent}
      </Link>
    );
  }

  return rowContent;
};
