<script lang="ts">
  import { resolve } from '$app/paths';
  import StyleMenu from './StyleMenu.svelte';

  const links = [
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ] as const;
</script>

<header class="mx-auto flex w-full px-6 py-4">
  <a href={resolve('/')} class="mr-4 text-xl font-bold hover:underline sm:mr-10">Grazen</a>

  <nav class="mx-4 flex grow items-center space-x-6 sm:space-x-10">
    {#each links as link (link.to)}
      <a href={resolve(link.to)} class="my-auto hover:underline">{link.label}</a>
    {/each}
  </nav>

  <StyleMenu />
</header>
