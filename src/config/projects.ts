export type ProjectStatus = 'active' | 'completed' | 'archived';

export type ProjectRepository = {
  label: string;
  url: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  period: string;
  status: ProjectStatus;
  repositoryUrl?: string;
  repositories?: ProjectRepository[];
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description:
      'A minimalist personal portfolio with a terminal-inspired interface, built using Next.js and the Kanagawa color palette.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    period: '2026 - present',
    status: 'active',
    repositoryUrl: 'https://github.com/notnikbtw/portfolio',
    featured: true,
  },
  {
    title: 'Dotfiles & NixOS Config',
    description:
      'My personal Nix configurations for my PC and laptop, which use the Hyprland WM. Also included are my configurations for Quickshell, Rofi, Zsh, and other programs.',
    tech: ['Nix', 'Hyprland', 'Quickshell', 'Rofi', 'Zsh', 'Tmux'],
    period: '2026 - present',
    status: 'active',
    repositoryUrl: 'https://github.com/notnikbtw/nixos-config',
    featured: true,
  },
  {
    title: 'Booking Platform',
    description:
      'Full-stack platform for booking tables and seats at restaurants. It includes an interactive search, a booking feature, reviews, and integration with Google Maps.',
    tech: [
      'React',
      'NestJS',
      'PostgreSQL',
      'TypeORM',
      'Docker',
      'Google Maps API',
    ],
    period: '2025 - 2026',
    status: 'completed',
    repositories: [
      {
        label: 'backend',
        url: 'https://github.com/notnikbtw/venue-booking-backend',
      },
      {
        label: 'frontend',
        url: 'https://github.com/notnikbtw/venue-booking-frontend',
      },
    ],
    featured: true,
  },
];

export const featuredProjects = projects.filter(p => p.featured);
