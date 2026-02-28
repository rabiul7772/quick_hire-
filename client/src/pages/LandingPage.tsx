import { Hero } from '../components/layout/Hero';
import { LogoSection } from '../components/layout/LogoSection';
import { CategorySection } from '../components/layout/CategorySection';
import { CTASection } from '../components/layout/CTASection';
import { FeaturedJobs } from '../components/layout/FeaturedJobs';
import { LatestJobs } from '../components/layout/LatestJobs';

export const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <LogoSection />
      <CategorySection />
      <CTASection />
      <FeaturedJobs />
      <LatestJobs />
    </div>
  );
};
