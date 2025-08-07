<script lang="ts">
  import { resolve } from '$app/paths';
  import { dayjs } from '$lib/common/dayjs';
  import type { Post } from '../schemas';
  import { faCalendar, faPencil } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  export interface Props {
    post: Post;
  }

  const { post }: Props = $props();

  const postUrl = resolve('/blog/[slug]', { slug: post.slug });
</script>

<li class="border-bg-light hover:border-fg border hover:no-underline">
  <a href={postUrl} class="block px-4 py-2">
    <h2 class="mb-2 text-xl font-semibold">{post.title}</h2>
    <p class="mb-2">{post.summary}</p>

    <div class="divide-fg-muted inline-flex gap-x-4 gap-y-3 text-sm not-sm:flex-col">
      <div class="inline-flex items-center gap-x-2">
        {#if post.createdAt}
          <Fa icon={faCalendar} class="text-fg-muted" />
          <span class="text-fg-muted">{dayjs.utc(post.createdAt).format('MMM D, YYYY')}</span>
        {:else}
          <Fa icon={faPencil} class="text-fg-muted" />
          <span class="text-fg-muted">Draft</span>
        {/if}
      </div>

      {#if post.tags.length !== 0}
        <ul class="inline-flex flex-wrap items-center gap-2">
          {#each post.tags as tag (tag)}
            <li class="bg-bg-light inline px-1.5 py-0.5 text-xs">#{tag}</li>
          {/each}
        </ul>
      {/if}
    </div>
  </a>
</li>
