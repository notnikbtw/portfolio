import { Link } from '@/components/ui/link';
import { ArrowRight, FolderGit2 } from 'lucide-react';
import type { Project } from '@/config/projects';
import { TechList } from '@/components/tech-badge';
import { Card } from '@/components/ui/card';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group flex flex-col justify-between p-4 sm:flex-row sm:items-start sm:gap-6">
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-foreground font-mono text-sm font-semibold sm:text-base">
            {project.title}
          </h3>

          {project.liveUrl && (
            <span className="text-chart-4 inline-flex items-center gap-1 font-mono text-xs">
              <span className="bg-chart-4 h-1.5 w-1.5" aria-hidden="true" />
              <span>live</span>
            </span>
          )}

          <span
            aria-label={`Status: ${project.status}`}
            className={`inline-flex items-center gap-1 font-mono text-xs ${
              project.status === 'active'
                ? 'text-chart-2'
                : 'text-muted-foreground/60'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 ${
                project.status === 'active'
                  ? 'bg-chart-2'
                  : 'bg-muted-foreground/40'
              }`}
              aria-hidden="true"
            />
            <span>{project.status}</span>
          </span>
        </div>

        <p className="text-muted-foreground line-clamp-2 max-w-xl text-sm leading-relaxed">
          {project.description}
        </p>

        <TechList items={project.tech} className="mt-1" />
      </div>

      <div className="mt-3 flex flex-col items-start gap-2.5 sm:mt-0 sm:shrink-0 sm:items-end">
        {project.period && (
          <span className="text-muted-foreground/60 font-mono text-xs">
            {project.period}
          </span>
        )}

        <div className="flex flex-wrap items-center gap-3">
          {project.repositories && project.repositories.length > 0
            ? project.repositories.map(repo => (
                <Link
                  key={repo.url}
                  href={repo.url}
                  aria-label={`${project.title} ${repo.label} source code`}
                  className="inline-flex items-center gap-1 font-mono text-xs"
                >
                  <FolderGit2 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{repo.label}</span>
                </Link>
              ))
            : project.repositoryUrl && (
                <Link
                  href={project.repositoryUrl}
                  aria-label={`${project.title} source code`}
                  className="inline-flex items-center gap-1 font-mono text-xs"
                >
                  <FolderGit2 className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>code</span>
                </Link>
              )}

          {project.liveUrl && project.status !== 'archived' && (
            <Link
              href={project.liveUrl}
              aria-label={`${project.title} live demo`}
              className="inline-flex items-center gap-1 font-mono text-xs"
            >
              <span>demo</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </Card>
  );
}
