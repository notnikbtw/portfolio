import { Folder, User } from 'lucide-react';
import { Icons } from '@/components/icons';
import { LINKS } from '@/config/site';

type NavItem = {
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
    href: LINKS.github.href,
    label: 'GitHub',
    icon: Icons.gitHub,
  },
  {
    href: LINKS.x.href,
    label: 'X',
    icon: Icons.x,
  },
  {
    href: LINKS.bluesky.href,
    label: 'Bluesky',
    icon: Icons.bluesky,
  },
];
