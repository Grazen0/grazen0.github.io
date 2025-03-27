<script lang="ts">
  import globalState, {
    FONT_TYPES,
    getActiveProseFont,
    getActiveThemeName,
  } from '$lib/style-prefs.svelte';
  import themes from '$lib/themes';
  import { onMount } from 'svelte';
  import type { HTMLAttributes, KeyboardEventHandler, MouseEventHandler } from 'svelte/elements';
  import { on } from 'svelte/events';

  const sortedThemeNames = Object.keys(themes).toSorted() as (keyof typeof themes)[];
  const lightThemeNames = sortedThemeNames.filter((th) => themes[th].type === 'light');
  const darkThemeNames = sortedThemeNames.filter((th) => themes[th].type === 'dark');

  export interface Props extends HTMLAttributes<HTMLSelectElement> {}

  const { class: className, ...props }: Props = $props();

  let showMenu = $state(false);

  const toggleMenu = (ev: MouseEvent) => {
    ev.stopPropagation();
    showMenu = !showMenu;
  };

  const handleMenuClick: MouseEventHandler<HTMLElement> = (ev) => {
    ev.stopPropagation();
  };

  const handleMenuKeyDown: KeyboardEventHandler<HTMLElement> = (ev) => {
    if (ev.key === 'Escape' && showMenu) {
      ev.preventDefault();
      showMenu = false;
    }
  };

  onMount(() =>
    on(document, 'click', () => {
      showMenu = false;
    }),
  );
</script>

<div class="relative">
  <button
    onclick={toggleMenu}
    aria-haspopup="menu"
    aria-expanded={showMenu}
    class={[
      'cursor-pointer border px-2 py-1 text-sm',
      showMenu ? 'text-fg border-fg' : 'text-fg-muted border-fg-muted',
    ]}
  >
    Style
  </button>

  {#if showMenu}
    <div
      onclick={handleMenuClick}
      onkeydown={handleMenuKeyDown}
      role="menu"
      tabindex={-1}
      class="bg-bg border border-fg px-4 py-4 absolute top-4/3 right-0"
    >
      <form class="space-y-4">
        <div class="text-nowrap text-right">
          <label for="theme" class="text-sm">Theme:</label>
          <select
            name="theme"
            id="theme"
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
        </div>

        <div class="text-nowrap text-right">
          <label for="font-prose" class="text-sm">Prose font:</label>
          <select
            name="font-prose"
            id="font-prose"
            {...props}
            class={['border-foreground border px-2 py-1 text-sm', className]}
            bind:value={() => getActiveProseFont(), (v) => (globalState.proseFont = v)}
          >
            {#each FONT_TYPES as fontType (fontType)}
              <option value={fontType}>{fontType}</option>
            {/each}
          </select>
        </div>
      </form>
    </div>
  {/if}
</div>
<!-- Needed so that --font-serif is included in the generated CSS -->
<div class="hidden font-serif"></div>
