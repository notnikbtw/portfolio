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
    items: [{ name: 'email', url: 'mailto:notnikbtw@proton.me' }],
  },
  {
    directory: 'socials',
    items: [
      { name: 'github', url: 'https://github.com/notnikbtw' },
      { name: 'x', url: 'https://x.com/notnikbtw' },
      {
        name: 'bluesky',
        url: 'https://bsky.app/profile/notnikbtw.bsky.social',
      },
    ],
  },
  {
    directory: 'configs',
    items: [
      {
        name: 'dotfiles',
        url: 'https://github.com/notnikbtw/dotfiles',
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
