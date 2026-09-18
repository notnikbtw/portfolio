import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/section-header';
import { treeData } from '@/config/tree';

export function TerminalTree() {
  const totalDirectories = treeData.length;
  const totalItems = treeData.reduce(
    (acc, group) => acc + group.items.length,
    0
  );

  return (
    <section aria-label="Directory tree" className="flex flex-col gap-3">
      <SectionHeader title="Directory Tree" />

      <Card className="p-4 font-mono text-xs select-text">
        <div className="text-muted-foreground mb-3 flex items-center gap-2">
          <span className="text-chart-2 select-none" aria-hidden="true">
            nik@nixos:~/home$
          </span>
          <span className="text-foreground">tree -l links</span>
        </div>

        <div className="text-muted-foreground/80 flex flex-col">
          <div className="text-foreground">~/links</div>

          {treeData.map((group, groupIndex) => {
            const isGroupLast = groupIndex === treeData.length - 1;
            const groupBranch = isGroupLast ? '└── ' : '├── ';
            const childIndent = isGroupLast ? '    ' : '│   ';

            return (
              <div key={group.directory} className="flex flex-col">
                <div className="text-foreground">
                  <span
                    className="text-muted-foreground/40 select-none"
                    aria-hidden="true"
                  >
                    {groupBranch}
                  </span>
                  <span className="text-chart-1 font-semibold">
                    {group.directory}/
                  </span>
                </div>

                {group.items.map((item, itemIndex) => {
                  const isItemLast = itemIndex === group.items.length - 1;
                  const itemBranch = isItemLast ? '└── ' : '├── ';
                  return (
                    <div key={item.name} className="flex items-center">
                      <span
                        className="text-muted-foreground/40 whitespace-pre select-none"
                        aria-hidden="true"
                      >
                        {childIndent}
                        {itemBranch}
                      </span>
                      {item.url ? (
                        <Link
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-chart-2 focus-visible:ring-ring underline-offset-4 hover:underline focus-visible:ring-1 focus-visible:outline-none"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <span className="text-foreground">{item.name}</span>
                      )}

                      {item.comment && (
                        <span className="text-muted-foreground/50 ml-2 text-[11px]">
                          # {item.comment}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="text-muted-foreground/50 mt-2 text-[11px]">
          {totalDirectories} directories, {totalItems} items
        </div>

        <div className="text-muted-foreground mt-3 flex items-center gap-2">
          <span className="text-chart-2 select-none" aria-hidden="true">
            nik@nixos:~/home$
          </span>
          <span
            className="bg-chart-2 inline-block h-3.5 w-1.5 animate-pulse"
            aria-hidden="true"
          />
        </div>
      </Card>
    </section>
  );
}
