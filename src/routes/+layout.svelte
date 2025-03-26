<script lang="ts">
  import Footer from '$lib/components/layout/Footer.svelte';
  import Header from '$lib/components/layout/Header.svelte';
  import { onMount } from 'svelte';
  import '../app.css';
  import { loadTheme, themeEffect } from '$lib/global-state/theme.svelte';
  import type { LayoutProps } from './$types';
  import { themeInit } from './theme-init';

  const { children }: LayoutProps = $props();

  onMount(loadTheme);
  $effect(themeEffect);
</script>

<svelte:head>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html themeInit()}
</svelte:head>

<Header />
<div class="grow leading-loose">{@render children()}</div>
<Footer />
