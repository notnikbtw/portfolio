import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type TechBadgeProps = {
  children: ReactNode;
  className?: string;
};

export function TechBadge({ children, className, ...props }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'border-border/70 bg-background/60 text-foreground border px-1.5 py-0.5 font-mono text-xs transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

type TechListProps = {
  items: string[];
  className: string;
};

export function TechList({ items, className, ...props }: TechListProps) {
  return (
    <div className={cn('flex flex-wrap gap-1.5', className)} {...props}>
      {items.map(item => (
        <TechBadge key={item}>{item}</TechBadge>
      ))}
    </div>
  );
}
