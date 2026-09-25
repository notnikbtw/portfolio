// import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/section-header';
import { Link } from '@/components/ui/link';
import { CopyButton } from '@/components/copy-button';
import { ArrowRight } from 'lucide-react';
import { SectionSubheader } from '@/components/section-subheader';
import { CONNECT_SECTIONS } from '@/config/connect';
// import { SITE_BADGE } from '@/config/site';

export function AboutConnect() {
  return (
    <section aria-label="Connect" className="flex flex-col gap-6">
      <SectionHeader title="Connect" />

      <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
        Feel free to reach out to me if you have an interesting project, a
        question, or just want to say hi. I&apos;m always open to discussing new
        opportunities, engineering jobs, and collaboration.
      </p>

      <div className="flex flex-col gap-6">
        {CONNECT_SECTIONS.map(section => (
          <div key={section.id} className="flex flex-col gap-2.5">
            <SectionSubheader title={section.title} />

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {section.channels.map(item => (
                <Card
                  key={item.label}
                  className="group relative flex flex-col justify-between p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-muted-foreground group-hover:text-foreground flex items-center gap-2 transition-colors">
                      <item.icon
                        className="h-4 w-4 shrink-0"
                        aria-hidden="true"
                      />
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
          </div>
        ))}

        {/* <div className="flex flex-col gap-2.5">
          <SectionSubheader title={SITE_BADGE.title} />

          <Card className="flex flex-col gap-4 p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Image
                  src={SITE_BADGE.src}
                  alt={SITE_BADGE.alt}
                  width={88}
                  height={31}
                  unoptimized
                  className="image-rendering-pixelated border-border/80 shrink-0 border"
                />
                <div className="flex flex-col">
                  <span className="text-foreground font-mono text-xs font-semibold">
                    {SITE_BADGE.title}
                  </span>
                  <span className="text-muted-foreground font-mono text-[11px]">
                    88&times;31 px &middot; web badge
                  </span>
                </div>
              </div>

              <CopyButton
                value={SITE_BADGE.embedHtml}
                ariaLabel="Copy HTML embed code for 88x31 badge"
                className="self-start sm:self-auto"
              />
            </div>

            <p className="text-muted-foreground text-xs leading-relaxed">
              {SITE_BADGE.description}
            </p>

            <div className="border-border/60 bg-muted/30 text-foreground/90 selection:bg-muted selection:text-foreground overflow-x-auto border p-2.5 font-mono text-xs">
              <code className="whitespace-pre">{SITE_BADGE.embedHtml}</code>
            </div>
          </Card>
        </div> */}
      </div>
    </section>
  );
}
