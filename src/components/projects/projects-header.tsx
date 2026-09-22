import { Breadcrumb } from '@/components/breadcrumb';
import { projects } from '@/config/projects';
import { Badge } from '@/components/ui/badge';

export function ProjectsHeader() {
  const totalCount = projects.length;
  const activeCount = projects.filter(p => p.status === 'active').length;
  const completedCount = projects.filter(p => p.status === 'completed').length;
  const archivedCount = projects.filter(p => p.status === 'archived').length;

  return (
    <header className="border-border/60 flex flex-col gap-5 border-b pb-8">
      <Breadcrumb />

      <div className="flex flex-col gap-2.5">
        <div className="flex flex-wrap items-baseline gap-2 font-mono text-xs sm:text-lg">
          <span
            className="text-chart-2 font-semibold select-none"
            aria-hidden="true"
          >
            nik@nixos:
          </span>
          <h1 className="text-foreground font-bold tracking-tight">
            ~/projects
          </h1>
        </div>

        <p className="text-muted-foreground max-w-xl text-sm leading-relaxed sm:text-base">
          A catalog of projects, open-source tools, and system configurations.
        </p>
      </div>

      <div className="text-muted-foreground/80 flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
        <Badge>
          total:{' '}
          <strong className="text-foreground font-medium">{totalCount}</strong>
        </Badge>
        <Badge>
          active:{' '}
          <strong className="text-foreground font-medium">{activeCount}</strong>
        </Badge>
        <Badge>
          completed:{' '}
          <strong className="text-foreground font-medium">
            {completedCount}
          </strong>
        </Badge>
        <Badge>
          archived:{' '}
          <strong className="text-foreground font-medium">
            {archivedCount}
          </strong>
        </Badge>
      </div>
    </header>
  );
}
