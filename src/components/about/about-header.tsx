import { Breadcrumb } from '@/components/breadcrumb';
import { Badge } from '@/components/ui/badge';

export function AboutHeader() {
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
          <h1 className="text-foreground font-bold tracking-tight">~/about</h1>
        </div>

        <p className="text-muted-foreground max-w-xl text-sm leading-relaxed sm:text-base">
          Software engineer focused on clean architecture, full-stack systems,
          and reproducible Linux environments.
        </p>
      </div>

      <div className="text-muted-foreground/80 flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
        <Badge>
          role:
          <strong className="text-foreground font-medium">
            full-stack engineer
          </strong>
        </Badge>
        <Badge>
          <span
            className="bg-chart-2 mr-1.5 inline-block h-1.5 w-1.5"
            aria-hidden="true"
          />
          status:
          <strong className="text-foreground font-medium">
            open for work & projects
          </strong>
        </Badge>
        <Badge>
          os: <strong className="text-foreground font-medium">nixos</strong>
        </Badge>
        <Badge>
          editor:
          <strong className="text-foreground font-medium">
            vscode / neovim
          </strong>
        </Badge>
      </div>
    </header>
  );
}
