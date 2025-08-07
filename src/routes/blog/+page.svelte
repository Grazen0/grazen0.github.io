<script lang="ts">
  import { resolve } from '$app/paths';
  import PostCard from '$lib/blog/components/PostCard.svelte';
  import Link from '$lib/common/components/Link.svelte';
  import Main from '$lib/common/components/Main.svelte';
  import Title from '$lib/common/components/Title.svelte';
  import type { PageProps } from './$types';
  import { faRssSquare } from '@fortawesome/free-solid-svg-icons';
  import { onMount } from 'svelte';
  import Fa from 'svelte-fa';
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
  <Title topic="My Blog" />

  <div class="text-right">
    <Link external href={resolve('/blog/feed.xml')} class="inline-flex items-center gap-x-2">
      <Fa icon={faRssSquare} />
      <span>feed.xml</span>
    </Link>
  </div>

  <ul class="my-4 space-y-4">
    {#each data.posts as post (post.slug)}
      <PostCard {post} />
    {/each}
  </ul>
</Main>
