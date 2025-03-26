<script lang="ts">
  import { base } from '$app/paths';
  import type { Post } from '$lib/blog';
  import { formatDatePretty } from '$lib/dates';
  import type { HTMLLiAttributes } from 'svelte/elements';

  export interface Props extends HTMLLiAttributes {
    post: Post;
  }

  const { post, class: className, ...props }: Props = $props();
</script>

<li class={['my-2 hover:no-underline hover:bg-bg-light', className]} {...props}>
  <a href="{base}/blog/{post.slug}" class="block px-4 py-2">
    <h2 class="text-lg font-semibold">{post.title}</h2>
    <p>{post.summary}</p>
    <p class="text-sm inline">{formatDatePretty(post.createdAt)}</p>

    {#if post.tags.length !== 0}
      &middot;
      <ul class="inline">
        {#each post.tags as tag (tag)}
          <li class="px-2 py-1 text-sm bg-bg-dark inline">#{tag}</li>
        {/each}
      </ul>
    {/if}
  </a>
</li>
