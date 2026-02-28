import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import { categories } from '../../constants';

export const CategorySection = () => {
  return (
    <section className="px-6 lg:px-[124px] py-20 bg-white">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl lg:text-5xl font-clash font-semibold text-neutral-100 leading-tight">
          Explore by <span className="text-accent-blue">category</span>
        </h2>
        <button className="flex items-center gap-2 text-brand-primary font-bold hover:underline transition-all">
          Show all jobs
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map(cat => (
          <div
            key={cat.name}
            className={cn(
              'p-8 border transition-all cursor-pointer group hover:shadow-lg',
              cat.active
                ? 'bg-brand-primary border-brand-primary text-white'
                : 'bg-white border-neutral-20 text-neutral-100 hover:bg-brand-primary hover:border-brand-primary hover:text-white'
            )}
          >
            <div
              className={cn(
                'w-12 h-12 flex items-center justify-center mb-8 transition-colors',
                cat.active
                  ? 'text-white'
                  : 'text-brand-primary group-hover:text-white'
              )}
            >
              <cat.icon className="w-10 h-10" />
            </div>
            <h3
              className={cn(
                'text-2xl font-semibold mb-3 font-epilogue group-hover:underline transition-colors',
                cat.active ? 'text-white' : 'text-neutral-100 group-hover:text-white'
              )}
            >
              {cat.name}
            </h3>
            <p
              className={cn(
                'flex items-center gap-2 transition-colors',
                cat.active
                  ? 'text-white/70'
                  : 'text-neutral-80 group-hover:text-white'
              )}
            >
              {cat.count} jobs available
              <ArrowRight
                className={cn(
                  'w-4 h-4 transition-transform group-hover:translate-x-1',
                  cat.active
                    ? 'text-white'
                    : 'text-neutral-80 group-hover:text-white'
                )}
              />
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
