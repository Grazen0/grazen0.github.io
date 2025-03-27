import { type ThemeName } from '$lib/themes';

export const FONT_TYPES = ['serif', 'sans', 'mono'] as const;

export type FontType = (typeof FONT_TYPES)[number];

export interface State {
  theme: ThemeName | null;
  proseFont: FontType | null;
}

const globalState = $state<State>({
  theme: null,
  proseFont: null,
});

export default globalState;
