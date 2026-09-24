import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/section-header';
import { Link } from '@/components/ui/link';
import { CopyButton } from '@/components/copy-button';
import { ArrowRight } from 'lucide-react';
import { CONNECT_CHANNELS } from '@/config/connect';

export function AboutConnect() {
  return (
    <section aria-label="Connect" className="flex flex-col gap-4">
      <SectionHeader title="Connect" />

      <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
        Feel free to reach out to me if you have an interesting project, a
        question, or just want to say hi. I&apos;m always open to discussing new
        opportunities, engineering job openings, and collaboration on open
        source projects.
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {CONNECT_CHANNELS.map(item => (
          <Card
            key={item.label}
            className="group relative flex flex-col justify-between p-4"
          >
            <div className="flex items-center justify-between">
              <div className="text-muted-foreground group-hover:text-foreground flex items-center gap-2 transition-colors">
                <item.icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="font-mono text-xs font-semibold tracking-wider uppercase">
                  {item.label}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {item.canCopy && (
                  <CopyButton
                    value={item.value}
                    ariaLabel={`Copy ${item.value}`}
                    className="relative z-10"
                  />
                )}
                <ArrowRight
                  className="text-muted-foreground/60 group-hover:text-foreground h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="mt-3">
              <Link
                href={item.href}
                variant="green"
                className="font-mono text-sm font-semibold after:absolute after:inset-0 after:content-[''] focus:outline-none"
              >
                {item.value}
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
