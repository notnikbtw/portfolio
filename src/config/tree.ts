import { LINKS } from '@/config/site';

export type TreeItem = {
  name: string;
  url?: string;
  comment?: string;
};

export type TreeGroup = {
  directory: string;
  items: TreeItem[];
};

export const treeData: TreeGroup[] = [
  {
    directory: 'contacts',
    items: [{ name: 'email', url: LINKS.email.href }],
  },
  {
    directory: 'socials',
    items: [
      { name: 'github', url: LINKS.github.href },
      { name: 'x', url: LINKS.x.href },
      {
        name: 'bluesky',
        url: LINKS.bluesky.href,
      },
    ],
  },
  {
    directory: 'configs',
    items: [
      {
        name: 'dotfiles',
        url: LINKS.dotfiles.href,
        comment: 'nixos/hyprland',
      },
    ],
  },
  {
    directory: 'bookmarks',
    items: [
      {
        name: 'kanagawa.nvim',
        url: 'https://github.com/rebelot/kanagawa.nvim',
      },
      { name: 'moe-counter', url: 'https://count.getloli.com/' },
    ],
  },
];
