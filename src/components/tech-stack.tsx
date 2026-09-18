import { SectionHeader } from '@/components/section-header';
import { stackCategories } from '@/config/skills';
import { TechList } from '@/components/tech-badge';
import { Card } from '@/components/ui/card';

export function TechStack() {
  return (
    <section
      aria-label="Technologies and environment"
      className="flex flex-col gap-4"
    >
      <SectionHeader title="Tech & Environment" />

      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
        {stackCategories.map(group => (
          <Card key={group.category} className="flex flex-col gap-2 p-4">
            <h3 className="text-foreground/90 font-mono text-xs font-medium sm:text-sm">
              ~/{group.category}
            </h3>
            <TechList items={group.skills} className="pt-1" />
          </Card>
        ))}
      </div>
    </section>
  );
}
