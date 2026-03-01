import { cn } from '../../utils/cn';
import { Link } from 'react-router-dom';

interface JobCardProps {
  id?: string;
  logo: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  tags: string[];
}

export const JobCard = ({
  id,
  logo,
  title,
  company,
  location,
  type,
  description,
  tags
}: JobCardProps) => {
  // Filter out the job type from tags to prevent double display
  const filteredTags = tags.filter(tag => tag !== type);

  const cardContent = (
    <div className="p-8 border border-neutral-20 bg-white hover:shadow-xl transition-all cursor-pointer group flex flex-col gap-6 h-full">
      <div className="flex items-start justify-between">
        <div className="w-14 h-14 flex items-center justify-center p-0 overflow-hidden">
          <img
            src={logo}
            alt={company}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="px-3 py-1.5 border border-[#4640DE] text-[#4640DE] text-sm font-semibold font-epilogue">
          {type}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-semibold text-[#25324B] font-epilogue group-hover:text-brand-primary transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-neutral-60 font-epilogue text-lg flex items-center gap-2">
          {company} <span className="w-1.5 h-1.5 bg-neutral-20 rounded-full" />{' '}
          {location}
        </p>
      </div>

      <p className="text-neutral-60 line-clamp-2 text-lg font-epilogue leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
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
                tagStyles[tag] || 'bg-neutral-10 text-neutral-80'
              )}
            >
              {tag}
            </span>
          );
        })}
      </div>
    </div>
  );

  if (id) {
    return (
      <Link to={`/jobs/${id}`} className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};
