import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { featuredProjects } from '@/config/projects';
import { ProjectCard } from '@/components/project-card';

export function FeaturedProjects() {
  return (
    <section className="flex flex-col gap-5 py-6">
      <div className="border-border/60 flex items-center justify-between border-b pb-2">
        <div className="text-muted-foreground flex items-center gap-2 font-mono text-xs font-semibold tracking-wider uppercase">
          <span className="text-chart-2">{'>'}</span>
          <span>Featured Projects</span>
        </div>
        <Link
          href="/projects"
          className="group text-muted-foreground hover:text-foreground inline-flex items-center gap-1 font-mono text-xs transition-colors"
        >
          <span>all projects</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="flex flex-col gap-3">
        {featuredProjects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
