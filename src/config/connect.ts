import { Mail } from 'lucide-react';
import { Icons } from '@/components/icons';
import { LINKS } from '@/config/site';

export type ConnectChannel = {
  label: string;
  value: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  canCopy?: boolean;
};

export const CONNECT_CHANNELS: ConnectChannel[] = [
  {
    label: 'email',
    value: LINKS.email.value,
    href: LINKS.email.href,
    icon: Mail,
    canCopy: true,
  },
  {
    label: 'github',
    value: LINKS.github.handle,
    href: LINKS.github.href,
    icon: Icons.gitHub,
  },
  {
    label: 'bluesky',
    value: LINKS.bluesky.handle,
    href: LINKS.bluesky.href,
    icon: Icons.bluesky,
  },
];

export const connectChannels = CONNECT_CHANNELS;
