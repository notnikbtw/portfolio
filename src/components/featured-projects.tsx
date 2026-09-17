import { featuredProjects } from '@/config/projects';
import { ProjectCard } from '@/components/project-card';
import { SectionHeader } from '@/components/section-header';

export function FeaturedProjects() {
  return (
    <section
      aria-label="Featured projects"
      className="flex flex-col gap-5 py-6"
    >
      <SectionHeader
        title="Featured Projects"
        href="/projects"
        linkText="all projects"
      />

      <div className="flex flex-col gap-3">
        {featuredProjects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
