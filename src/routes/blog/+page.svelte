<script lang="ts">
  import { base } from '$app/paths';
  import Link from '$lib/components/Link.svelte';
  import Main from '$lib/components/layout/Main.svelte';
  import Title from '$lib/components/layout/Title.svelte';
  import type { PageProps } from './$types';
  import PostCard from './PostCard.svelte';
  import { onMount } from 'svelte';
  import { on } from 'svelte/events';

  const { data }: PageProps = $props();

  let searchInputElement = $state<HTMLInputElement | null>(null);

  onMount(() =>
    on(document, 'keydown', (ev) => {
      if (ev.key === '/') {
        ev.preventDefault();
        searchInputElement?.focus();
      }
    }),
  );
</script>

<Main>
  <Title topic="Blog" />

  <div class="text-right">
    <Link external href="{base}/blog/feed.xml">feed.xml</Link>
  </div>

  <ul>
    {#each data.posts as post (post.slug)}
      <PostCard {post} />
    {/each}
  </ul>
</Main>
