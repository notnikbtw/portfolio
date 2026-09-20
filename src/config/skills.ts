export type SkillCategory = {
  category: string;
  skills: string[];
};

export const stackCategories: SkillCategory[] = [
  {
    category: 'backend & systems',
    skills: ['Go', 'NestJS', 'PostgreSQL', 'Docker', 'TypeORM', 'REST APIs'],
  },
  {
    category: 'frontend & ui',
    skills: [
      'TypeScript',
      'React',
      'Next.js',
      'Redux Toolkit',
      'Tailwind CSS',
      'Shadcn/ui',
      'Framer Motion',
    ],
  },
  {
    category: 'infra & environment',
    skills: ['NixOS', 'Arch Linux', 'Proxmox', 'Nginx', 'Hyprland', 'Neovim'],
  },
];
