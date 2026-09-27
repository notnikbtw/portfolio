export type SystemSpec = {
  label: string;
  value: string;
};

export type PaletteColor = {
  name: string;
  bg: string;
};

export const SYSTEM_SPECS: SystemSpec[] = [
  { label: 'os', value: 'NixOS' },
  { label: 'wm', value: 'Hyprland' },
  { label: 'shell', value: 'Zsh + Starship' },
  { label: 'terminal', value: 'Kitty' },
  { label: 'multiplexer', value: 'Tmux' },
  { label: 'editors', value: 'VS Code & Neovim' },
  { label: 'theme', value: 'Kanagawa Dark' },
  { label: 'ui / bar', value: 'Quickshell & Rofi' },
];

export const KANAGAWA_PALETTE: PaletteColor[][] = [
  [
    { name: 'black', bg: 'bg-[#16161D]' },
    { name: 'red', bg: 'bg-[#C34043]' },
    { name: 'green', bg: 'bg-[#76946A]' },
    { name: 'yellow', bg: 'bg-[#C0A36E]' },
    { name: 'blue', bg: 'bg-[#7E9CD8]' },
    { name: 'magenta', bg: 'bg-[#957FB8]' },
    { name: 'cyan', bg: 'bg-[#6A9589]' },
    { name: 'white', bg: 'bg-[#C8C093]' },
  ],
  [
    { name: 'bright-black', bg: 'bg-[#727169]' },
    { name: 'bright-red', bg: 'bg-[#E82424]' },
    { name: 'bright-green', bg: 'bg-[#98BB6C]' },
    { name: 'bright-yellow', bg: 'bg-[#E6C384]' },
    { name: 'bright-blue', bg: 'bg-[#7FB4CA]' },
    { name: 'bright-magenta', bg: 'bg-[#938AA9]' },
    { name: 'bright-cyan', bg: 'bg-[#7AA89F]' },
    { name: 'bright-white', bg: 'bg-[#DCD7BA]' },
  ],
];

export const NIXOS_ASCII = `          ▗▄▄▄       ▗▄▄▄▄    ▄▄▄▖
          ▜███▙       ▜███▙  ▟███▛
           ▜███▙       ▜███▙▟███▛
            ▜███▙       ▜██████▛
     ▟█████████████████▙ ▜████▛     ▟▙
    ▟███████████████████▙ ▜███▙    ▟██▙
           ▄▄▄▄▖           ▜███▙  ▟███▛
          ▟███▛             ▜██▛ ▟███▛
         ▟███▛               ▜▛ ▟███▛
▟███████████▛                  ▟██████████▙
▜██████████▛                  ▟███████████▛
      ▟███▛ ▟▙               ▟███▛
     ▟███▛ ▟██▙             ▟███▛
    ▟███▛  ▜███▙           ▝▀▀▀▀
    ▜██▛    ▜███▙ ▜██████████████████▛
     ▜▛     ▟████▙ ▜████████████████▛
           ▟██████▙         ▜███▙
          ▟███▛▜███▙         ▜███▙
         ▟███▛  ▜███▙         ▜███▙
         ▝▀▀▀    ▀▀▀▀▘         ▀▀▀▘`;
