import { SectionHeader } from '@/components/section-header';

export function AboutWhoami() {
  return (
    <section aria-label="About Nik" className="flex flex-col gap-4">
      <SectionHeader title="Whoami" />

      <div className="text-muted-foreground flex flex-col gap-4 text-sm leading-relaxed sm:text-base sm:leading-7">
        <p>
          Hi! I&apos;m !Nik, a software engineer who loves programming and
          building things. My main frontend stack is TypeScript, Next.js, and
          React, and right now I&apos;m actively learning backend development
          and DevOps - writing code in NestJS, learning Go, and setting up my
          own services.
        </p>

        <p>
          In addition to web apps, I&apos;m really into Linux and terminal
          tools. For over a year, Arch Linux was my main system; I&apos;ve also
          tried Artix and other distributions, and now I&apos;ve completely
          switched to NixOS with Hyprland. I love the declarative approach:
          instead of manual setup, everything is cleanly defined in my dotfiles.
        </p>

        <p>
          Always open to interesting projects, collaboration, and writing clean
          code.
        </p>
      </div>
    </section>
  );
}
