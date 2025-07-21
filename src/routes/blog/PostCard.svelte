<script lang="ts">
  import { base } from '$app/paths';
  import type { PublishedPost } from '$lib/blog';
  import dayjs from 'dayjs';
  import type { HTMLLiAttributes } from 'svelte/elements';

  export interface Props extends HTMLLiAttributes {
    post: PublishedPost;
  }

  const { post, class: className, ...props }: Props = $props();
</script>

<li
  class={['my-4 hover:no-underline border border-bg-light hover:border-fg', className]}
  {...props}
>
  <a href="{base}/blog/{post.slug}" class="block px-4 py-2">
    <h2 class="text-lg font-semibold">{post.title}</h2>
    <p>{post.summary}</p>
    <p class="text-sm inline">{dayjs(post.createdAt).format('MMMM D, YYYY')}</p>

    {#if post.tags.length !== 0}
      &middot;
      <ul class="inline space-x-2">
        {#each post.tags as tag (tag)}
          <li class="px-2 py-1 text-sm bg-bg-light inline">#{tag}</li>
        {/each}
      </ul>
    {/if}
  </a>
</li>
