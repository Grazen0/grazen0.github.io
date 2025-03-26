<script lang="ts">
  import { base } from '$app/paths';
  import StyleMenuButton from './StyleMenuButton.svelte';

  const links = [
    { to: `${base}/blog`, label: 'Blog' },
    { to: `${base}/contact`, label: 'Contact' },
  ];
</script>

<header class="flex px-6 py-4">
  <a href="{base}/" class="hover:underline mr-4 sm:mr-10 text-xl font-bold">Grazen</a>

  <nav class="mx-4 flex grow items-center space-x-4 sm:space-x-10">
    {#each links as link (link.to)}
      <a href={link.to} class="my-auto hover:underline">{link.label}</a>
    {/each}
  </nav>

  <StyleMenuButton />
</header>
