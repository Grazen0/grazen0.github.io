<script lang="ts">
  import Main from '$lib/components/layout/Main.svelte';
  import Prose from '$lib/components/layout/Prose.svelte';
  import Title from '$lib/components/layout/Title.svelte';
  import type { PageProps } from './$types';
  import BottomNavigation from './BottomNavigation.svelte';
  import CommentSection from './CommentSection.svelte';
  import readingTime from 'reading-time/lib/reading-time';
  import 'katex/dist/katex.min.css';
  import { dayjs } from '$lib/dayjs';
  import { renderContentToHtml } from '$lib/render';
  import type { IconDefinition } from '@fortawesome/free-brands-svg-icons';
  import { faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  const { data }: PageProps = $props();
  const { post, prevPost, nextPost } = data;

  const stats = $derived(readingTime(post.content));
  const htmlContent = $derived(renderContentToHtml(post.content));
</script>

<Main>
  <Title topic={post.title} class="mb-6" />
  <div class="mb-4 text-center">
    <div class="inline-flex items-center gap-x-3">
      <Fa icon={faCalendar as IconDefinition} />
      {dayjs.utc(post.createdAt).format('MMMM D, YYYY')} <span class="mx-1">&mdash;</span>
      <Fa icon={faClock as IconDefinition} />
      {stats.text}
    </div>

    {#if post.tags.length !== 0}
      <ul class="my-2 space-x-2">
        {#each post.tags as tag (tag)}
          <li class="bg-bg-light inline px-2 py-1 text-sm">#{tag}</li>
        {/each}
      </ul>
    {/if}
  </div>

  {#if post.image}
    <img src={post.image.url} alt={post.image.alt} class="mx-auto max-h-124" />
  {/if}

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <Prose>{@html htmlContent}</Prose>

  <BottomNavigation {prevPost} {nextPost} />
</Main>

<CommentSection />
