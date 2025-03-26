import { type ThemeName } from '$lib/themes';

export interface State {
  theme: ThemeName | null;
}

const globalState = $state<State>({
  theme: null,
});

export default globalState;
