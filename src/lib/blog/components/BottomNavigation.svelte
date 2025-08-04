<script lang="ts">
  import { resolve } from '$app/paths';
  import Link from '$lib/components/Link.svelte';
  import type { Post } from '../schemas';

  export interface Props {
    prevPost?: Post;
    nextPost?: Post;
  }

  const { prevPost, nextPost }: Props = $props();
</script>

<nav class="my-10 grid grid-rows-2 leading-relaxed not-sm:gap-y-6 sm:grid-cols-2">
  <div class="text-left">
    {#if prevPost}
      <Link
        data-sveltekit-reload
        href={resolve(`/blog/[slug]`, { slug: prevPost.slug })}
        title={prevPost.title}
        class="text-link"
      >
        Previous post:<br />
        {prevPost.title}
      </Link>
    {/if}
  </div>
  <div class="text-right">
    {#if nextPost}
      <Link
        data-sveltekit-reload
        href={resolve(`/blog/[slug]`, { slug: nextPost.slug })}
        title={nextPost.title}
        class="text-link"
      >
        Next post:<br />
        {nextPost.title}
      </Link>
    {/if}
  </div>
</nav>
