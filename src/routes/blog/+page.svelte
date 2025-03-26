<script lang="ts">
  import type { Post } from '$lib/blog';
  import Main from '$lib/components/layout/Main.svelte';
  import Title from '$lib/components/layout/Title.svelte';
  import { matchesQuery, parseTokens, type Query } from '$lib/search';
  import type { PageProps } from './$types';
  import PostCard from './PostCard.svelte';
  import { onMount } from 'svelte';
  import { on } from 'svelte/events';

  const { data }: PageProps = $props();

  let queryText = $state('');
  let searchInputElement = $state<HTMLInputElement | null>(null);

  const postMatchesQuery = (query: Query) => (post: Post) => {
    const matcher = matchesQuery(query);
    return matcher(post.title) || matcher(post.summary) || post.tags.some(matcher);
  };

  const query = $derived(parseTokens(queryText));

  const filteredPosts = $derived(data.posts.filter(postMatchesQuery(query)));

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

  <form class="text-center my-6">
    <input
      bind:value={queryText}
      bind:this={searchInputElement}
      placeholder="Search..."
      class="border border-fg w-64 px-2 py-1 text-sm"
    />
  </form>

  <ul>
    {#each filteredPosts as post (post.slug)}
      <PostCard {post} />
    {/each}
  </ul>
</Main>
