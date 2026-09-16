export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
];

export const socialLinks: NavItem[] = [
  { href: 'https://github.com/notnikbtw', label: 'GitHub' },
  { href: 'https://x.com/notnikbtw', label: 'X' },
  { href: 'https://bsky.app/profile/notnikbtw.bsky.social', label: 'Bluesky' },
];
