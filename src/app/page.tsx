import { Hero } from '@/components/hero';
import { FeaturedProjects } from '@/components/featured-projects';

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pt-4 pb-16 sm:gap-14 sm:pt-6 sm:pb-20">
      <Hero />
      <FeaturedProjects />
    </div>
  );
}
