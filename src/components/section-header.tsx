import { Link } from '@/components/ui/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  title: string;
  href?: string;
  linkText?: string;
  className?: string;
};

export function SectionHeader({
  title,
  href,
  linkText,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'border-border/60 flex items-center justify-between border-b pb-2',
        className
      )}
    >
      <div className="text-muted-foreground flex items-center gap-2 font-mono text-xs font-semibold tracking-wider uppercase sm:text-sm">
        <span className="text-chart-2" aria-hidden="true">
          ❯
        </span>
        <h2>{title}</h2>
      </div>

      {href && linkText && (
        <Link
          href={href}
          aria-label={`${linkText} for ${title}`}
          className="group inline-flex items-center gap-1 font-mono text-xs sm:text-sm"
        >
          <span>{linkText}</span>
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
      )}
    </div>
  );
}
