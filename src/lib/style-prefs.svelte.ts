import themes, { isThemeName, themeVariables, type Theme, type ThemeName } from '$lib/themes';

export const FONT_TYPES = ['serif', 'sans', 'mono'] as const;

export type FontType = (typeof FONT_TYPES)[number];

export interface StylePrefs {
  theme: ThemeName | null;
  proseFont: FontType | null;
}

const stylePrefs = $state<StylePrefs>({
  theme: null,
  proseFont: null,
});

export const getActiveThemeName = (): ThemeName => stylePrefs.theme ?? 'kanagawa';
export const getActiveTheme = (): Theme => themes[getActiveThemeName()];
export const getActiveProseFont = (): FontType => stylePrefs.proseFont ?? 'mono';

export const themeEffect = () => {
  if (stylePrefs.theme !== null) {
    localStorage.theme = stylePrefs.theme;
  }

  const theme = getActiveTheme();
  for (const [key, varName] of Object.entries(themeVariables)) {
    document.documentElement.style.setProperty(varName, theme[key as keyof typeof themeVariables]);
  }
};

export const proseFontEffect = () => {
  if (stylePrefs.proseFont !== null) {
    localStorage.proseFont = stylePrefs.proseFont;
  }

  document.documentElement.style.setProperty('--font-prose', `var(--font-${stylePrefs.proseFont})`);
};

export const loadStylePreferences = () => {
  const savedThemeName = localStorage.theme;
  if (savedThemeName !== null && isThemeName(savedThemeName)) {
    stylePrefs.theme = savedThemeName;
  }
};

export default stylePrefs;
