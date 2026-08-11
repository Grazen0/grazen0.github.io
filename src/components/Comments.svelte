<script lang="ts">
  import Giscus from '@giscus/svelte';
  import { REPO } from '@/consts';
  import { type SvelteHTMLElements } from 'svelte/elements';
  import { onMount } from 'svelte';

  let theme = $state('transparent_light');

  function updateGiscusTheme() {
    theme = document.documentElement.classList.contains('dark')
      ? 'transparent_dark'
      : 'light';
  }

  onMount(() => {
    const observer = new MutationObserver(updateGiscusTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    window.onload = () => {
      updateGiscusTheme();
    };
  });

  export type Props = SvelteHTMLElements['section'];

  const props: Props = $props();
</script>

<section {...props}>
  <Giscus
    repo={REPO}
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
    {theme}
  />
</section>
