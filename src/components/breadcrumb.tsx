import * as React from 'react';
import { Link } from '@/components/ui/link';
import { cn } from '@/lib/utils';

export type BreadcrumbProps = {
  href?: string;
  label?: string;
  ariaLabel?: string;
  className?: string;
};

export function Breadcrumb({
  href = '/',
  label = 'cd ..',
  ariaLabel = 'Back to previous directory',
  className,
}: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <Link
        href={href}
        className={cn(
          'group inline-flex items-center gap-1.5 font-mono text-xs',
          className
        )}
        aria-label={ariaLabel}
      >
        <span className="text-chart-2 select-none" aria-hidden="true">
          ←
        </span>
        <span className="underline-offset-4 group-hover:underline">
          {label}
        </span>
      </Link>
    </nav>
  );
}
