import { Hero } from '@/components/hero';
import { FeaturedProjects } from '@/components/featured-projects';
import { TechStack } from '@/components/tech-stack';
import { TerminalTree } from '@/components/terminal-tree';

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pt-8 pb-16 sm:gap-14 sm:pt-12 sm:pb-24">
      <Hero />
      <FeaturedProjects />
      <TechStack />
      <TerminalTree />
    </div>
  );
}
