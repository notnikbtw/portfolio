import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export type CardProps = ComponentProps<'div'>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'border-border bg-card/30 hover:border-foreground/40 hover:bg-card/50 border transition-colors',
        className
      )}
      {...props}
    />
  );
}
