import * as React from 'react';
import { cn } from '@/lib/utils';

export type TerminalPromptProps = {
  command?: string;
  path?: string;
  prompt?: string;
  cursor?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export function TerminalPrompt({
  command,
  path = '~',
  prompt,
  cursor = false,
  className,
  children,
}: TerminalPromptProps) {
  const promptText = prompt ?? `nik@nixos:${path}$`;

  return (
    <div className={cn('flex items-center gap-2 font-mono', className)}>
      <span
        className="text-chart-2 font-semibold select-none"
        aria-hidden="true"
      >
        {promptText}
      </span>

      {command && <span className="text-foreground">{command}</span>}

      {cursor && (
        <span
          className="bg-chart-2 animate-cursor-blink inline-block h-4 w-2"
          aria-hidden="true"
        />
      )}

      {children}
    </div>
  );
}
