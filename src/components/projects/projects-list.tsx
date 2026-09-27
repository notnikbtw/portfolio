'use client';

import * as React from 'react';
import { ProjectCard } from '@/components/projects/project-card';
import { Badge } from '@/components/ui/badge';
import { projects as allProjects, type Project } from '@/config/projects';
import { PROJECTS_PER_PAGE } from '@/config/site';
import { SectionHeader } from '@/components/section-header';

type FilterStatus = 'all' | 'active' | 'completed' | 'archived';

type ProjectsListProps = {
  initialProjects?: Project[];
};

export function ProjectsList({
  initialProjects = allProjects,
}: ProjectsListProps) {
  const [filter, setFilter] = React.useState<FilterStatus>('all');
  const [visibleProjects, setVisibleProjects] =
    React.useState(PROJECTS_PER_PAGE);

  const counts = React.useMemo(
    () => ({
      all: initialProjects.length,
      active: initialProjects.filter(p => p.status === 'active').length,
      completed: initialProjects.filter(p => p.status === 'completed').length,
      archived: initialProjects.filter(p => p.status === 'archived').length,
    }),
    [initialProjects]
  );

  const filteredProjects = React.useMemo(() => {
    if (filter === 'all') return initialProjects;
    return initialProjects.filter(p => p.status === filter);
  }, [filter, initialProjects]);

  const hasMore = visibleProjects < filteredProjects.length;

  const paginatedProjects = React.useMemo(() => {
    return filteredProjects.slice(0, visibleProjects);
  }, [visibleProjects, filteredProjects]);

  const handleFilterChange = (newFilter: FilterStatus) => {
    setFilter(newFilter);
    setVisibleProjects(PROJECTS_PER_PAGE);
  };

  const filterOptions: { label: string; value: FilterStatus; count: number }[] =
    [
      { label: 'all', value: 'all', count: counts.all },
      { label: 'active', value: 'active', count: counts.active },
      { label: 'completed', value: 'completed', count: counts.completed },
      { label: 'archived', value: 'archived', count: counts.archived },
    ];

  return (
    <section aria-label="Projects list" className="flex flex-col gap-6">
      <SectionHeader
        title={`Directory (${filteredProjects.length})`}
        className="flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between"
      >
        <div
          role="toolbar"
          aria-label="Filter projects by status"
          className="flex flex-wrap items-center gap-1.5 sm:gap-2"
        >
          {filterOptions.map(option => {
            const isSelected = filter === option.value;

            return (
              <Badge
                key={option.value}
                asChild
                interactive
                variant={isSelected ? 'active' : 'default'}
                className="px-1.5 py-0.5 sm:px-2"
              >
                <button
                  type="button"
                  onClick={() => handleFilterChange(option.value)}
                  aria-pressed={isSelected}
                  className="font-mono text-xs"
                >
                  {option.label}
                </button>
              </Badge>
            );
          })}
        </div>
      </SectionHeader>

      {paginatedProjects.length > 0 ? (
        <div className="flex flex-col gap-3.5">
          {paginatedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      ) : (
        <div className="border-border/60 bg-card/20 flex flex-col items-center justify-center border border-dashed py-12 text-center font-mono">
          <p className="text-muted-foreground text-xs">
            [0 entries found matching filter:{' '}
            <span className="text-chart-2">{filter}</span>]
          </p>
          <button
            type="button"
            onClick={() => handleFilterChange('all')}
            className="text-foreground hover:text-chart-2 mt-3 text-xs underline-offset-4 hover:underline"
          >
            reset filter to all
          </button>
        </div>
      )}

      {filteredProjects.length > 0 && (
        <div className="border-border/60 text-muted-foreground flex flex-col items-center justify-center gap-2.5 border-t pt-4 font-mono text-xs">
          <span>
            showing <strong>{paginatedProjects.length}</strong>
            {hasMore && (
              <>
                {' '}
                of <strong>{filteredProjects.length}</strong>
              </>
            )}{' '}
            entries
          </span>

          {hasMore && (
            <button
              type="button"
              onClick={() =>
                setVisibleProjects(prev =>
                  Math.min(prev + PROJECTS_PER_PAGE, filteredProjects.length)
                )
              }
              className="border-border/70 hover:border-foreground/60 hover:bg-card text-foreground focus-visible:ring-ring border px-3 py-1 font-mono text-xs transition-colors focus-visible:ring-1 focus-visible:outline-none"
            >
              Load more
            </button>
          )}
        </div>
      )}
    </section>
  );
}
