<script lang="ts">
  import { base } from '$app/paths';
  import type { Post } from '$lib/blog';
  import Link from '$lib/components/Link.svelte';

  export interface Props {
    prevPost?: Post;
    nextPost?: Post;
  }

  const { prevPost, nextPost }: Props = $props();
</script>

<nav class="my-10 grid grid-rows-2 sm:grid-cols-2 leading-relaxed">
  <div class="text-left">
    {#if prevPost}
      <Link
        data-sveltekit-reload
        href="{base}/blog/{prevPost.slug}"
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
        href="{base}/blog/{nextPost.slug}"
        title={nextPost.title}
        class="text-link"
      >
        Next post:<br />
        {nextPost.title}
      </Link>
    {/if}
  </div>
</nav>
