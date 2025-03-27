<script lang="ts">
  import { links } from '$lib/constants';
  import { getActiveTheme } from '$lib/global-state/theme.svelte';
  import Giscus from '@giscus/svelte';

  const theme = $derived.by(getActiveTheme);

  const giscusTheme = $derived(
    theme.giscusTheme ?? (theme.type === 'dark' ? 'transparent_dark' : 'light'),
  );
</script>

<div class="mx-auto max-w-3xl">
  <Giscus
    repo="Grazen0/grazen0.github.io"
    repoId="MDEwOlJlcG9zaXRvcnkzMTMzNjc4MDc="
    category="Comments"
    categoryId="DIC_kwDOEq2c_84Cofvu"
    id="comments"
    term=""
    mapping="pathname"
    strict="1"
    reactionsEnabled="1"
    emitMetadata="0"
    inputPosition="top"
    lang="en"
    loading="lazy"
    theme={giscusTheme}
  />
</div>
