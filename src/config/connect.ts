import { Mail } from 'lucide-react';
import { Icons } from '@/components/icons';

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
    value: 'nik@notnik.dev',
    href: 'mailto:nik@notnik.dev',
    icon: Mail,
    canCopy: true,
  },
  {
    label: 'github',
    value: 'notnikbtw',
    href: 'https://github.com/notnikbtw',
    icon: Icons.gitHub,
  },
  {
    label: 'bluesky',
    value: 'notnik.dev',
    href: 'https://bsky.app/profile/notnik.dev',
    icon: Icons.bluesky,
  },
];

export const connectChannels = CONNECT_CHANNELS;
