import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { Slot } from 'radix-ui';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center gap-1 border px-2 py-0.5 font-mono text-xs transition-colors select-none',
  {
    variants: {
      variant: {
        default: 'border-border/70 bg-background/60 text-foreground',
        active: 'border-chart-2 bg-chart-2/10 text-chart-2',
        outline: 'border-border/70 bg-transparent text-foreground',
      },
      interactive: {
        true: 'cursor-pointer hover:border-foreground/60 hover:bg-card focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      interactive: false,
    },
  }
);

export type BadgeProps = React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  };

export function Badge({
  className,
  variant,
  interactive,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot.Root : 'span';

  return (
    <Comp
      className={cn(badgeVariants({ variant, interactive }), className)}
      {...props}
    />
  );
}

export { badgeVariants };
