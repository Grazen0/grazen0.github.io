<script lang="ts">
  import globalState from '$lib/global-state/index.svelte';
  import { getActiveThemeName } from '$lib/global-state/theme.svelte';
  import themes from '$lib/themes';
  import type { HTMLAttributes } from 'svelte/elements';

  const sortedThemeNames = Object.keys(themes).toSorted() as (keyof typeof themes)[];
  const lightThemeNames = sortedThemeNames.filter((th) => themes[th].type === 'light');
  const darkThemeNames = sortedThemeNames.filter((th) => themes[th].type === 'dark');

  export interface Props extends HTMLAttributes<HTMLSelectElement> {}

  const { class: className, ...props }: Props = $props();
</script>

<select
  {...props}
  class={['border-foreground border px-2 py-1 text-sm', className]}
  bind:value={() => getActiveThemeName(), (v) => (globalState.theme = v)}
>
  <optgroup label="dark">
    {#each darkThemeNames as themeName (themeName)}
      <option value={themeName}>{themeName}</option>
    {/each}
  </optgroup>
  <optgroup label="light">
    {#each lightThemeNames as themeName (themeName)}
      <option value={themeName}>{themeName}</option>
    {/each}
  </optgroup>
</select>
