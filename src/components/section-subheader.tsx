import { cn } from '@/lib/utils';

export type SectionSubheaderProps = {
  children?: React.ReactNode;
  title?: string;
  className?: string;
  as?: 'h3' | 'h4' | 'span' | 'div';
  prefix?: string;
};

export function SectionSubheader({
  children,
  title,
  className,
  as: Component = 'span',
  prefix = '// ',
}: SectionSubheaderProps) {
  return (
    <Component
      className={cn(
        'text-muted-foreground font-mono text-xs font-semibold tracking-wider uppercase',
        className
      )}
    >
      {prefix && (
        <span className="select-none" aria-hidden="true">
          {prefix}
        </span>
      )}
      {title ?? children}
    </Component>
  );
}
