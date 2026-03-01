import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../../constants';
import { useCategoryCounts } from '../../hooks/useJobs';

export const CategorySection = () => {
  const { data: categoryCounts } = useCategoryCounts();

  const displayCategories = categories.map(cat => {
    const backendCount =
      categoryCounts?.data?.find(
        (c: { name: string; count: number }) => c.name === cat.name
      )?.count || 0;

    return {
      ...cat,
      count: backendCount
    };
  });

  return (
    <section className="px-6 lg:px-[124px] py-20 bg-white">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl lg:text-5xl font-clash font-semibold text-neutral-100 leading-tight">
          Explore by <span className="text-accent-blue">category</span>
        </h2>
        <Link
          to="/jobs"
          className="flex items-center gap-2 text-brand-primary font-bold hover:underline transition-all"
        >
          Show all jobs
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayCategories.map(cat => (
          <Link
            key={cat.name}
            to={`/jobs?category=${encodeURIComponent(cat.name)}`}
            className="p-8 border bg-white border-neutral-20 text-neutral-100 hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all cursor-pointer group hover:shadow-lg block"
          >
            <div className="w-12 h-12 flex items-center justify-center mb-8 text-brand-primary group-hover:text-white transition-colors">
              <cat.icon className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 font-epilogue text-neutral-100 group-hover:text-white group-hover:underline transition-colors">
              {cat.name}
            </h3>
            <p className="flex items-center gap-2 text-neutral-80 group-hover:text-white transition-colors">
              {cat.count} jobs available
              <ArrowRight className="w-4 h-4 text-neutral-80 group-hover:text-white transition-transform group-hover:translate-x-1" />
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};
