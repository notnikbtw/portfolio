import type { Metadata } from 'next';
import { ProjectsHeader } from '@/components/projects/projects-header';
import { ProjectsList } from '@/components/projects/projects-list';

export const metadata: Metadata = {
  title: 'Projects | !Nik',
  description: 'All projects, experiments, and open-source tooling.',
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8 pt-8 pb-16 sm:gap-10 sm:pt-12 sm:pb-24">
      <ProjectsHeader />
      <ProjectsList />
    </div>
  );
}
