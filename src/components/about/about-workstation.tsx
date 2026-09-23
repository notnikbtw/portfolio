import { Card } from '@/components/ui/card';
import { SectionHeader } from '@/components/section-header';
import { Link } from '@/components/ui/link';
import { TerminalPrompt } from '@/components/terminal-prompt';
import {
  SYSTEM_SPECS,
  KANAGAWA_PALETTE,
  NIXOS_ASCII,
} from '@/config/workstation';

export function AboutWorkstation() {
  return (
    <section
      aria-label="System and Workstation"
      className="flex flex-col gap-4"
    >
      <SectionHeader title="System & Workstation" />

      <Card className="flex flex-col gap-4 p-4 font-mono text-xs leading-relaxed sm:p-6 sm:text-sm">
        <TerminalPrompt command="fastfetch --config dev-env" className="pb-1" />

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8">
          <pre
            aria-hidden="true"
            className="text-chart-2/80 hidden text-[9px] leading-[1.15] select-none md:block lg:text-[10px]"
          >
            {NIXOS_ASCII}
          </pre>

          <div className="flex flex-1 flex-col gap-2">
            <div className="grid grid-cols-1">
              <div>
                <span className="text-chart-2 font-semibold">nik</span>
                <span className="text-muted-foreground">@</span>
                <span className="text-chart-2 font-semibold">nixos</span>
              </div>
              <div
                className="text-muted-foreground/60 pb-1 select-none"
                aria-hidden="true"
              >
                ---------
              </div>

              {SYSTEM_SPECS.map((spec, index) => (
                <div key={index}>
                  <span className="text-muted-foreground mr-2 select-none">
                    {spec.label}:
                  </span>
                  <span className="text-foreground font-medium">
                    {spec.value}
                  </span>
                </div>
              ))}

              <div>
                <span className="text-muted-foreground mr-2 select-none">
                  dotfiles:
                </span>
                <Link
                  href="https://github.com/notnikbtw/nixos-config"
                  variant="green"
                  className="group inline-flex items-center gap-1 font-medium"
                >
                  <span>notnikbtw/nixos-config</span>
                </Link>
              </div>
            </div>

            <div
              className="flex flex-col pt-1"
              aria-label="Terminal color palette"
            >
              {KANAGAWA_PALETTE.map((row, rowIndex) => (
                <div key={rowIndex} className="flex items-center">
                  {row.map(color => (
                    <span
                      key={color.name}
                      className={`inline-block h-3 w-5 sm:h-3.5 sm:w-6 ${color.bg}`}
                      title={color.name}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <TerminalPrompt cursor />
      </Card>
    </section>
  );
}
