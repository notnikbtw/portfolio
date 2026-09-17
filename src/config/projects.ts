export type ProjectStatus = 'active' | 'completed' | 'archived';

export type Project = {
  title: string;
  description: string;
  tech: string[];
  period: string;
  status: ProjectStatus;
  repositoryUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Booking Platform',
    description:
      'High-performance full-stack venue booking engine featuring JWT authentication and modular API services.',
    tech: ['NestJS', 'PostgreSQL', 'React', 'Docker'],
    period: '2026',
    status: 'active',
    repositoryUrl: 'https://github.com/notnikbtw',
    liveUrl: '#',
    featured: true,
  },
  {
    title: 'Dotfiles & NixOS Config',
    description:
      'Declarative system configurations, Hyprland desktop environment workflow, and lightweight developer tooling.',
    tech: ['Nix', 'Hyprland', 'Waybar', 'Lua'],
    period: '2025 — present',
    status: 'active',
    repositoryUrl: 'https://github.com/notnikbtw',
    featured: true,
  },
  {
    title: 'Homelab Infrastructure',
    description:
      'Automated containerized homelab with Vaultwarden, reverse proxy routing, and local network services.',
    tech: ['Docker', 'Nginx', 'Linux', 'Proxmox'],
    period: '2024 — 2025',
    status: 'archived',
    repositoryUrl: 'https://github.com/notnikbtw',
    featured: true,
  },
];

export const featuredProjects = projects.filter(p => p.featured);
