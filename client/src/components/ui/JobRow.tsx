import { cn } from '../../utils/cn';
import { Button } from '../ui/Button';

interface JobRowProps {
  logo: string;
  title: string;
  company: string;
  location: string;
  type: string;
  tags: string[];
}

export const JobRow = ({
  logo,
  title,
  company,
  location,
  type,
  tags
}: JobRowProps) => {
  return (
    <div className="p-6 bg-white border border-neutral-10 hover:border-brand-primary transition-all cursor-pointer group">
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 flex items-center justify-center bg-white border border-neutral-10 p-3">
          <img
            src={logo}
            alt={company}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-semibold text-neutral-100 font-epilogue group-hover:text-brand-primary transition-colors">
            {title}
          </h3>
          <p className="text-neutral-60 font-epilogue text-sm flex items-center gap-2">
            {company} <span className="w-1 h-1 bg-neutral-60 rounded-full" />{' '}
            {location}
          </p>
          <div className="flex gap-2 mt-2">
            <span className="px-3 py-1 bg-accent-green/10 text-accent-green rounded-full text-xs font-semibold font-epilogue">
              {type}
            </span>
            <span className="w-px h-4 bg-neutral-20 self-center" />
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
                    'px-3 py-1 rounded-full text-xs font-semibold font-epilogue',
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
  );
};
