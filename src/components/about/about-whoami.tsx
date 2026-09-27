import { SectionHeader } from '@/components/section-header';
import { ABOUT_WHOAMI } from '@/config/about';

export function AboutWhoami() {
  return (
    <section aria-label="About Nik" className="flex flex-col gap-4">
      <SectionHeader title="Whoami" />

      <div className="text-muted-foreground flex flex-col gap-4 text-sm leading-relaxed sm:text-base sm:leading-7">
        {ABOUT_WHOAMI.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
