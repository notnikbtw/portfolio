import * as React from 'react';
import NextLink from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const linkVariants = cva(
  'focus-visible:ring-ring transition-colors focus-visible:ring-1 focus-visible:outline-none',
  {
    variants: {
      variant: {
        default: 'text-muted-foreground hover:text-foreground',
        green:
          'text-foreground hover:text-chart-2 hover:underline underline-offset-4',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export type LinkProps = React.ComponentProps<typeof NextLink> &
  VariantProps<typeof linkVariants>;

export function Link({
  className,
  variant,
  href,
  target,
  rel,
  ...props
}: LinkProps) {
  const isExternal =
    typeof href === 'string' &&
    (href.startsWith('http://') ||
      href.startsWith('https://') ||
      href.startsWith('//'));

  const computedTarget = target ?? (isExternal ? '_blank' : undefined);
  const computedRel =
    rel ?? (computedTarget === '_blank' ? 'noopener noreferrer' : undefined);

  return (
    <NextLink
      href={href}
      target={computedTarget}
      rel={computedRel}
      className={cn(linkVariants({ variant }), className)}
      {...props}
    />
  );
}

export { linkVariants };
