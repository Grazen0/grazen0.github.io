<script lang="ts">
  import { onMount } from 'svelte';
  import '../app.css';
  import { page } from '$app/state';
  import Footer from '$lib/common/components/Footer.svelte';
  import Header from '$lib/common/components/Header.svelte';
  import { links } from '$lib/common/constants';
  import { stylePreloadScript } from '$lib/style/style-preload';
  import {
    loadStylePreferences,
    proseFontEffect,
    themeEffect,
  } from '$lib/style/svelte/style-prefs.svelte';
  import type { LayoutProps } from './$types';

  const { children }: LayoutProps = $props();

  const websiteName = 'Grazen';

  const {
    title,
    author = 'José Grayson',
    description = 'A cool website on the internet.',
    image = links.self + '/og.png',
  } = page.data.meta ?? {};

  const fullTitle = title ? `${title} | ${websiteName}` : websiteName;

  onMount(loadStylePreferences);

  $effect(themeEffect);
  $effect(proseFontEffect);
</script>

<svelte:head>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html stylePreloadScript()}

  <title>{fullTitle}</title>
  {#if title}
    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={websiteName} />
  {:else}
    <meta property="og:title" content={websiteName} />
  {/if}
  <meta name="twitter:title" content={fullTitle} />

  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta name="twitter:description" content={description} />

  <meta property="og:image" content={image} />
  <meta name="twitter:image" content={image} />

  <meta property="og:type" content="website" />
  <meta property="og:url" content={links.self + page.url.pathname} />
  <meta name="twitter:card" content="summary_large_image" />

  <meta name="author" content={author} />

  <meta name="theme-color" content="#dcd7ba" />
  <meta name="keywords" content="code,github,web,svelte,programming" />
</svelte:head>

<div class="mx-auto flex min-h-full max-w-4xl flex-col">
  <Header />
  <div class="grow">{@render children()}</div>
  <Footer />
</div>
