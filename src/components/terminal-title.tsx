import * as React from 'react';
import { cn } from '@/lib/utils';

export type TerminalTitleProps = {
  path?: string;
  prompt?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span';
  children?: React.ReactNode;
};

export function TerminalTitle({
  path,
  prompt = 'nik@nixos:',
  className,
  as: Component = 'h1',
  children,
}: TerminalTitleProps) {
  const content = path ?? children;

  return (
    <div
      className={cn(
        'flex flex-wrap items-baseline gap-2 font-mono text-xs sm:text-lg',
        className
      )}
    >
      <span
        className="text-chart-2 font-semibold select-none"
        aria-hidden="true"
      >
        {prompt}
      </span>
      <Component className="text-foreground font-bold tracking-tight">
        {content}
      </Component>
    </div>
  );
}
