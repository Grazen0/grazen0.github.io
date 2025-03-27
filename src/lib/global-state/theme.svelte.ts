import themes, { isThemeName, themeVariables, type Theme, type ThemeName } from '$lib/themes';
import globalState, { type FontType } from './index.svelte';

export const getActiveTheme = (): Theme => themes[getActiveThemeName()];

export const getActiveThemeName = (): ThemeName => globalState.theme ?? 'kanagawa';
export const getActiveProseFont = (): FontType => globalState.proseFont ?? 'mono';

export const themeEffect = () => {
  if (globalState.theme !== null) {
    localStorage.theme = globalState.theme;
  }

  const theme = getActiveTheme();
  for (const [key, varName] of Object.entries(themeVariables)) {
    document.documentElement.style.setProperty(varName, theme[key as keyof typeof themeVariables]);
  }
};

export const proseFontEffect = () => {
  if (globalState.proseFont !== null) {
    localStorage.proseFont = globalState.proseFont;
  }

  document.documentElement.style.setProperty(
    '--font-prose',
    `var(--font-${globalState.proseFont})`,
  );
};

export const loadStylePreferences = () => {
  const savedThemeName = localStorage.theme;
  if (savedThemeName !== null && isThemeName(savedThemeName)) {
    globalState.theme = savedThemeName;
  }
};
