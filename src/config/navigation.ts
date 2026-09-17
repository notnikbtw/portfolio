import { Folder, User } from 'lucide-react';
import { Icons } from '@/components/icons';

export type NavItem = {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
};

export const navItems: NavItem[] = [
  {
    href: '/about',
    label: 'About',
    icon: User,
  },
  {
    href: '/projects',
    label: 'Projects',
    icon: Folder,
  },
];

export const socialLinks: NavItem[] = [
  {
    href: 'https://github.com/notnikbtw',
    label: 'GitHub',
    icon: Icons.gitHub,
  },
  {
    href: 'https://x.com/notnikbtw',
    label: 'X',
    icon: Icons.x,
  },
  {
    href: 'https://bsky.app/profile/notnikbtw.bsky.social',
    label: 'Bluesky',
    icon: Icons.bluesky,
  },
];
