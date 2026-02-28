import { cn } from '../../utils/cn';

interface JobCardProps {
  logo: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
  tags: string[];
}

export const JobCard = ({
  logo,
  title,
  company,
  location,
  type,
  description,
  tags
}: JobCardProps) => {
  return (
    <div className="p-8 border border-neutral-20 bg-white hover:shadow-xl transition-all cursor-pointer group flex flex-col gap-6">
      <div className="flex items-start justify-between">
        <div className="w-12 h-12 flex items-center justify-center bg-white border border-neutral-10 p-2">
          <img
            src={logo}
            alt={company}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="px-3 py-1 border border-brand-primary text-brand-primary text-sm font-semibold font-epilogue">
          {type}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-neutral-100 font-epilogue group-hover:text-brand-primary transition-colors">
          {title}
        </h3>
        <p className="text-neutral-60 font-epilogue text-sm flex items-center gap-2">
          {company} <span className="w-1 h-1 bg-neutral-60 rounded-full" />{' '}
          {location}
        </p>
      </div>

      <p className="text-neutral-80 line-clamp-2 text-base font-epilogue leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map(tag => {
          const tagStyles: Record<string, string> = {
            Design: 'bg-brand-primary/10 text-brand-primary',
            Marketing: 'bg-accent-gold/10 text-accent-gold',
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
                'px-4 py-1.5 rounded-full text-xs font-semibold font-epilogue',
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
};
