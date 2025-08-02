<script lang="ts">
  import { base } from '$app/paths';
  import type { PublishedPost } from '$lib/blog';
  import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
  import { faCalendar } from '@fortawesome/free-solid-svg-icons';
  import dayjs from 'dayjs';
  import Fa from 'svelte-fa';

  export interface Props {
    post: PublishedPost;
  }

  const { post }: Props = $props();
</script>

<li class="border-bg-light hover:border-fg border hover:no-underline">
  <a href="{base}/blog/{post.slug}" class="block px-4 py-2">
    <h2 class="mb-2 text-xl font-semibold">{post.title}</h2>
    <p class="mb-3">{post.summary}</p>

    <div class="inline-flex items-center gap-x-2 text-sm">
      <Fa icon={faCalendar as IconDefinition} class="text-fg-muted" />
      <span class="text-fg-muted">{dayjs(post.createdAt).format('MMM D, YYYY')}</span>
      {#if post.tags.length !== 0}
        &middot;
        <ul class="inline-flex items-center gap-x-2">
          {#each post.tags as tag (tag)}
            <li class="bg-bg-light inline px-1.5 py-0.5 text-xs">#{tag}</li>
          {/each}
        </ul>
      {/if}
    </div>
  </a>
</li>
