<script lang="ts">
  import { onMount } from 'svelte';
  import '../app.css';
  import Footer from '$lib/common/components/Footer.svelte';
  import Header from '$lib/common/components/Header.svelte';
  import {
    loadStylePreferences,
    proseFontEffect,
    themeEffect,
  } from '$lib/style/svelte/style-prefs.svelte';
  import type { LayoutProps } from './$types';
  import { stylePreloadScript } from './style-preload';

  const { children }: LayoutProps = $props();

  onMount(loadStylePreferences);
  $effect(themeEffect);
  $effect(proseFontEffect);
</script>

<svelte:head>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html stylePreloadScript()}
</svelte:head>

<div class="mx-auto flex min-h-full max-w-4xl flex-col">
  <Header />
  <div class="grow">{@render children()}</div>
  <Footer />
</div>
