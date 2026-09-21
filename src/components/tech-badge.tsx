import type { ComponentProps } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type TechListProps = ComponentProps<'div'> & {
  items: string[];
};

export function TechList({ items, className, ...props }: TechListProps) {
  return (
    <div className={cn('flex flex-wrap gap-1.5', className)} {...props}>
      {items.map(item => (
        <Badge key={item}>{item}</Badge>
      ))}
    </div>
  );
}
