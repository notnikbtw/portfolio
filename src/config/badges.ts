type WebBadge = {
  name: string;
  src: string;
  url?: string;
};

export const webBadges: WebBadge[] = [
  {
    name: 'NixOS',
    src: '/buttons/nixos.gif',
    url: 'https://nixos.org',
  },
  {
    name: 'Anime 1',
    src: '/buttons/kawaii.gif',
  },
  {
    name: 'Anime 2',
    src: '/buttons/anime.gif',
  },
  {
    name: 'I like computer',
    src: '/buttons/i-like-computer.png',
  },
  {
    name: 'uBlock Origin',
    src: '/buttons/ublock-origin.png',
    url: 'https://ublockorigin.com/',
  },
  {
    name: 'Linux',
    src: '/buttons/linux.gif',
    url: 'https://www.linux.org/',
  },
  {
    name: 'Your Ad Here',
    src: '/buttons/your-ad.gif',
  },
];
