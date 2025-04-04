import type { Theme as GiscusTheme } from '@giscus/svelte';

export type ThemeType = 'dark' | 'light';

export interface Theme {
  type: ThemeType;
  bg: string;
  bgDark: string;
  bgLight: string;
  fg: string;
  fgMuted: string;
  fgStronger: string;
  fgLink: string;
  hljsBase00: string;
  hljsBase01: string;
  hljsBase02: string;
  hljsBase03: string;
  hljsBase04: string;
  hljsBase05: string;
  hljsBase06: string;
  hljsBase07: string;
  hljsBase08: string;
  hljsBase09: string;
  hljsBase0a: string;
  hljsBase0b: string;
  hljsBase0c: string;
  hljsBase0d: string;
  hljsBase0e: string;
  hljsBase0f: string;
  giscusTheme?: GiscusTheme;
}

export type ThemeName = keyof typeof themes;

export const isThemeName = (s: string): s is ThemeName => Object.keys(themes).includes(s);

export const themeVariables = {
  bg: '--color-bg',
  bgDark: '--color-bg-dark',
  bgLight: '--color-bg-light',
  fg: '--color-fg',
  fgMuted: '--color-fg-muted',
  fgStronger: '--color-fg-stronger',
  fgLink: '--color-fg-link',
  hljsBase00: '--color-hljs-base00',
  hljsBase01: '--color-hljs-base01',
  hljsBase02: '--color-hljs-base02',
  hljsBase03: '--color-hljs-base03',
  hljsBase04: '--color-hljs-base04',
  hljsBase05: '--color-hljs-base05',
  hljsBase06: '--color-hljs-base06',
  hljsBase07: '--color-hljs-base07',
  hljsBase08: '--color-hljs-base08',
  hljsBase09: '--color-hljs-base09',
  hljsBase0a: '--color-hljs-base0a',
  hljsBase0b: '--color-hljs-base0b',
  hljsBase0c: '--color-hljs-base0c',
  hljsBase0d: '--color-hljs-base0d',
  hljsBase0e: '--color-hljs-base0e',
  hljsBase0f: '--color-hljs-base0f',
} as const satisfies Partial<Theme>;

// Extra credit to Tinted Theming for some of the base16 palettes.
// https://tinted-theming.github.io/tinted-gallery/
const themes = {
  // https://github.com/rebelot/kanagawa.nvim
  kanagawa: {
    type: 'dark',
    bg: '#1f1f28',
    bgDark: '#16161d',
    bgLight: '#2a2a37',
    fg: '#dcd7ba',
    fgMuted: '#54546D',
    fgLink: '#7fb4ca',
    fgStronger: '#e6c384',
    hljsBase00: '#1f1f28',
    hljsBase01: '#2a2a37',
    hljsBase02: '#223249',
    hljsBase03: '#727169',
    hljsBase04: '#c8c093',
    hljsBase05: '#dcd7ba',
    hljsBase06: '#938aa9',
    hljsBase07: '#363646',
    hljsBase08: '#c34043',
    hljsBase09: '#ffa066',
    hljsBase0a: '#dca561',
    hljsBase0b: '#98bb6c',
    hljsBase0c: '#7fb4ca',
    hljsBase0d: '#7e9cd8',
    hljsBase0e: '#957fb8',
    hljsBase0f: '#d27e99',
  } as const,
  // https://github.com/dracula/dracula-theme
  dracula: {
    type: 'dark',
    bg: '#282a36',
    bgDark: '#191A21',
    bgLight: '#3a3c4e',
    fg: '#f8f8f2',
    fgMuted: '#6272a4',
    fgStronger: '#f1fa8c',
    fgLink: '#8be9fd',
    hljsBase00: '#282936',
    hljsBase01: '#3a3c4e',
    hljsBase02: '#4d4f68',
    hljsBase03: '#626483',
    hljsBase04: '#62d6e8',
    hljsBase05: '#e9e9f4',
    hljsBase06: '#f1f2f8',
    hljsBase07: '#f7f7fb',
    hljsBase08: '#ea51b2',
    hljsBase09: '#b45bcf',
    hljsBase0a: '#00f769',
    hljsBase0b: '#ebff87',
    hljsBase0c: '#a1efe4',
    hljsBase0d: '#62d6e8',
    hljsBase0e: '#b45bcf',
    hljsBase0f: '#00f769',
  } as const,
  // https://github.com/catppuccin/catppuccin
  'catpuccin-latte': {
    type: 'light',
    bg: '#eff1f5',
    bgDark: '#e6e9ef',
    bgLight: '#dce0e8',
    fg: '#4c4f69',
    fgMuted: '#7c7f93',
    fgLink: '#1e66f5',
    fgStronger: '#df8e1d',
    hljsBase00: '#eff1f5',
    hljsBase01: '#e6e9ef',
    hljsBase02: '#ccd0da',
    hljsBase03: '#bcc0cc',
    hljsBase04: '#acb0be',
    hljsBase05: '#4c4f69',
    hljsBase06: '#dc8a78',
    hljsBase07: '#7287fd',
    hljsBase08: '#d20f39',
    hljsBase09: '#fe640b',
    hljsBase0a: '#df8e1d',
    hljsBase0b: '#40a02b',
    hljsBase0c: '#179299',
    hljsBase0d: '#1e66f5',
    hljsBase0e: '#8839ef',
    hljsBase0f: '#dd7878',
    giscusTheme: 'catppuccin_latte',
  } as const,
  'catppucchin-frappe': {
    type: 'dark',
    bg: '#303446',
    bgDark: '#292c3c',
    bgLight: '#414559',
    fg: '#c6d0f5',
    fgMuted: '#949cbb',
    fgLink: '#8caaee',
    fgStronger: '#e5c890',
    hljsBase00: '#303446',
    hljsBase01: '#292c3c',
    hljsBase02: '#414559',
    hljsBase03: '#51576d',
    hljsBase04: '#626880',
    hljsBase05: '#c6d0f5',
    hljsBase06: '#f2d5cf',
    hljsBase07: '#babbf1',
    hljsBase08: '#e78284',
    hljsBase09: '#ef9f76',
    hljsBase0a: '#e5c890',
    hljsBase0b: '#a6d189',
    hljsBase0c: '#81c8be',
    hljsBase0d: '#8caaee',
    hljsBase0e: '#ca9ee6',
    hljsBase0f: '#eebebe',
    giscusTheme: 'catppuccin_frappe',
  },
  'catpuccin-macchiato': {
    type: 'dark',
    bg: '#24273a',
    bgDark: '#1e2030',
    bgLight: '#363a4f',
    fg: '#cad3f5',
    fgMuted: '#939ab7',
    fgLink: '#8aadf4',
    fgStronger: '#eed49f',
    hljsBase00: '#24273a',
    hljsBase01: '#1e2030',
    hljsBase02: '#363a4f',
    hljsBase03: '#494d64',
    hljsBase04: '#5b6078',
    hljsBase05: '#cad3f5',
    hljsBase06: '#f4dbd6',
    hljsBase07: '#b7bdf8',
    hljsBase08: '#ed8796',
    hljsBase09: '#f5a97f',
    hljsBase0a: '#eed49f',
    hljsBase0b: '#a6da95',
    hljsBase0c: '#8bd5ca',
    hljsBase0d: '#8aadf4',
    hljsBase0e: '#c6a0f6',
    hljsBase0f: '#f0c6c6',
    giscusTheme: 'catppuccin_macchiato',
  },
  'catpuccin-mocha': {
    type: 'dark',
    bg: '#1e1e2e',
    bgDark: '#181825',
    bgLight: '#313244',
    fg: '#cdd6f4',
    fgMuted: '#7c7f93',
    fgLink: '#89b4fa',
    fgStronger: '#f9e2af',
    hljsBase00: '#1e1e2e',
    hljsBase01: '#181825',
    hljsBase02: '#313244',
    hljsBase03: '#45475a',
    hljsBase04: '#585b70',
    hljsBase05: '#cdd6f4',
    hljsBase06: '#f5e0dc',
    hljsBase07: '#b4befe',
    hljsBase08: '#f38ba8',
    hljsBase09: '#fab387',
    hljsBase0a: '#f9e2af',
    hljsBase0b: '#a6e3a1',
    hljsBase0c: '#94e2d5',
    hljsBase0d: '#89b4fa',
    hljsBase0e: '#cba6f7',
    hljsBase0f: '#f2cdcd',
    giscusTheme: 'catppuccin_mocha',
  } as const,
  // https://github.com/morhetz/gruvbox
  'gruvbox-dark': {
    type: 'dark',
    bg: '#282828',
    bgDark: '#1d2021',
    bgLight: '#3c3836',
    fg: '#ebdbb2',
    fgMuted: '#bdae93',
    fgLink: '#83a598',
    fgStronger: '#fabd2f',
    hljsBase00: '#282828',
    hljsBase01: '#3c3836',
    hljsBase02: '#504945',
    hljsBase03: '#665c54',
    hljsBase04: '#bdae93',
    hljsBase05: '#d5c4a1',
    hljsBase06: '#ebdbb2',
    hljsBase07: '#fbf1c7',
    hljsBase08: '#fb4934',
    hljsBase09: '#fe8019',
    hljsBase0a: '#fabd2f',
    hljsBase0b: '#b8bb26',
    hljsBase0c: '#8ec07c',
    hljsBase0d: '#83a598',
    hljsBase0e: '#d3869b',
    hljsBase0f: '#d65d0e',
    giscusTheme: 'gruvbox_dark',
  } as const,
  'gruvbox-light': {
    type: 'light',
    bg: '#fbf1c7',
    bgDark: '#ebdbb2',
    bgLight: '#f2e5bc',
    fg: '#3c3836',
    fgMuted: '#665c54',
    fgLink: '#076678',
    fgStronger: '#b57614',
    hljsBase00: '#fbf1c7',
    hljsBase01: '#ebdbb2',
    hljsBase02: '#d5c4a1',
    hljsBase03: '#bdae93',
    hljsBase04: '#665c54',
    hljsBase05: '#504945',
    hljsBase06: '#3c3836',
    hljsBase07: '#282828',
    hljsBase08: '#9d0006',
    hljsBase09: '#af3a03',
    hljsBase0a: '#b57614',
    hljsBase0b: '#79740e',
    hljsBase0c: '#427b58',
    hljsBase0d: '#076678',
    hljsBase0e: '#8f3f71',
    hljsBase0f: '#d65d0e',
    giscusTheme: 'gruvbox_light',
  } as const,
  // https://github.com/folke/tokyonight.nvim
  'tokyo-night': {
    type: 'dark',
    bg: '#222436',
    bgDark: '#1e2030',
    bgLight: '#2f334d',
    fg: '#c8d3f5',
    fgMuted: '#828bb8',
    fgLink: '#82aaff',
    fgStronger: '#ffc777',
    hljsBase00: '#222436',
    hljsBase01: '#1e2030',
    hljsBase02: '#2d3f76',
    hljsBase03: '#636da6',
    hljsBase04: '#828bb8',
    hljsBase05: '#3b4261',
    hljsBase06: '#828bb8',
    hljsBase07: '#c8d3f5',
    hljsBase08: '#ff757f',
    hljsBase09: '#ffc777',
    hljsBase0a: '#ffc777',
    hljsBase0b: '#c3e88d',
    hljsBase0c: '#86e1fc',
    hljsBase0d: '#82aaff',
    hljsBase0e: '#fca7ea',
    hljsBase0f: '#c53b53',
  } as const,
  // https://rosepinetheme.com
  'rose-pine': {
    type: 'dark',
    bg: '#191724',
    bgDark: '#1f1d2e',
    bgLight: '#1f1d2e',
    fg: '#e0def4',
    fgMuted: '#908caa',
    fgLink: '#9ccfd8',
    fgStronger: '#f6c177',
    hljsBase00: '#191724',
    hljsBase01: '#1f1d2e',
    hljsBase02: '#26233a',
    hljsBase03: '#6e6a86',
    hljsBase04: '#908caa',
    hljsBase05: '#e0def4',
    hljsBase06: '#e0def4',
    hljsBase07: '#524f67',
    hljsBase08: '#eb6f92',
    hljsBase09: '#f6c177',
    hljsBase0a: '#ebbcba',
    hljsBase0b: '#31748f',
    hljsBase0c: '#9ccfd8',
    hljsBase0d: '#c4a7e7',
    hljsBase0e: '#f6c177',
    hljsBase0f: '#524f67',
  } as const,
  // https://github.com/sainnhe/everforest
  everforest: {
    type: 'dark',
    bg: '#1e2326',
    bgDark: '#272e33',
    bgLight: '#272e33',
    fg: '#d3c6aa',
    fgMuted: '#9da9a0',
    fgLink: '#7fbbb3',
    fgStronger: '#dbbc7f',
    hljsBase00: '#272e33',
    hljsBase01: '#2e383c',
    hljsBase02: '#414b50',
    hljsBase03: '#859289',
    hljsBase04: '#9da9a0',
    hljsBase05: '#d3c6aa',
    hljsBase06: '#edeada',
    hljsBase07: '#fffbef',
    hljsBase08: '#e67e80',
    hljsBase09: '#e69875',
    hljsBase0a: '#dbbc7f',
    hljsBase0b: '#a7c080',
    hljsBase0c: '#83c092',
    hljsBase0d: '#7fbbb3',
    hljsBase0e: '#d699b6',
    hljsBase0f: '#9da9a0',
  } as const,
} as const satisfies Record<string, Theme>;

export default themes;
