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

export type ConnectSection = {
  id: string;
  title: string;
  channels: ConnectChannel[];
};

export const CONNECT_SECTIONS: ConnectSection[] = [
  {
    id: 'contact',
    title: 'Direct Contact',
    channels: [
      {
        label: 'email',
        value: LINKS.email.value,
        href: LINKS.email.href,
        icon: Mail,
        canCopy: true,
      },
    ],
  },
  {
    id: 'socials',
    title: 'Socials & Networks',
    channels: [
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
      {
        label: 'x',
        value: LINKS.x.handle,
        href: LINKS.x.href,
        icon: Icons.x,
      },
    ],
  },
];

export const CONNECT_CHANNELS = CONNECT_SECTIONS.flatMap(s => s.channels);
export const connectChannels = CONNECT_CHANNELS;
