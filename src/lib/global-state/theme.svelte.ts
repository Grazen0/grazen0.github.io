import themes, { isThemeName, themeVariables, type Theme, type ThemeName } from '$lib/themes';
import globalState from './index.svelte';

export const getActiveTheme = (): Theme => themes[getActiveThemeName()];

export const getActiveThemeName = (): ThemeName => globalState.theme ?? 'kanagawa';

export const themeEffect = () => {
  if (globalState.theme !== null) {
    localStorage.theme = globalState.theme;
  }

  const theme = getActiveTheme();
  for (const [key, varName] of Object.entries(themeVariables)) {
    document.documentElement.style.setProperty(varName, theme[key as keyof typeof themeVariables]);
  }
};

export const loadTheme = () => {
  const savedThemeName = localStorage.theme;
  if (savedThemeName !== null && isThemeName(savedThemeName)) {
    globalState.theme = savedThemeName;
  }
};
