import Link from 'next/link';
import { ArrowRight, FolderGit2 } from 'lucide-react';
import type { Project } from '@/config/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group border-border bg-card/30 hover:border-foreground/40 hover:bg-card/60 flex flex-col justify-between border p-4 transition-colors sm:flex-row sm:items-start sm:gap-6">
      <div className="flex flex-1 flex-col gap-2">
        {/* Заголовок та статуси */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-foreground font-mono text-sm font-semibold">
            {project.title}
          </span>

          {/* Індикатор наявності деплою */}
          {project.liveUrl && (
            <span
              title="Live deployment available"
              className="text-chart-4 inline-flex items-center gap-1 font-mono text-[10px]"
            >
              <span className="bg-chart-4 h-1.5 w-1.5" />
              <span>live</span>
            </span>
          )}

          {/* Статус життєвого циклу */}
          <span
            className={`inline-flex items-center gap-1 font-mono text-[10px] ${
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
            />
            {project.status}
          </span>
        </div>

        {/* Опис */}
        <p
          title={project.description}
          className="text-muted-foreground line-clamp-2 max-w-xl text-xs leading-relaxed"
        >
          {project.description}
        </p>

        {/* Теги */}
        <div className="mt-1 flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span
              key={t}
              className="border-border/80 bg-background/50 text-muted-foreground border px-1.5 py-0.5 font-mono text-[10px]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Права колонка: Дата вгорі, під нею посилання */}
      <div className="mt-3 flex flex-col items-start gap-2.5 sm:mt-0 sm:shrink-0 sm:items-end">
        {project.period && (
          <span className="text-muted-foreground/60 font-mono text-xs">
            {project.period}
          </span>
        )}

        <div className="flex items-center gap-3">
          {project.repositoryUrl && (
            <Link
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source code`}
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 font-mono text-xs transition-colors"
            >
              <FolderGit2 className="h-3.5 w-3.5" />
              <span>code</span>
            </Link>
          )}

          {project.liveUrl && project.status !== 'archived' && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-chart-1 inline-flex items-center gap-1 font-mono text-xs transition-colors"
            >
              <span>demo</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
