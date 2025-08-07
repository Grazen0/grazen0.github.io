<script lang="ts">
  import { resolve } from '$app/paths';
  import BottomNavigation from '$lib/blog/components/BottomNavigation.svelte';
  import CommentSection from '$lib/blog/components/CommentSection.svelte';
  import SharePostButton from '$lib/blog/components/SharePostButton.svelte';
  import Main from '$lib/common/components/Main.svelte';
  import Prose from '$lib/common/components/Prose.svelte';
  import Title from '$lib/common/components/Title.svelte';
  import { dayjs } from '$lib/common/dayjs';
  import type { PageProps } from './$types';
  import { faCalendar, faClock, faMessage, faRssSquare } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';
  import 'katex/dist/katex.min.css';

  const { data }: PageProps = $props();
  const { post, prevPost, nextPost } = data;
</script>

<Main>
  <Title topic={post.title} class="mb-6" />
  <div class="mb-4 text-center">
    <div class="inline-flex items-center gap-x-3">
      <Fa icon={faCalendar} />
      {dayjs.utc(post.createdAt).format('MMMM D, YYYY')}
      <span class="mx-1">&mdash;</span>
      <Fa icon={faClock} />
      {data.stats.text}
    </div>

    {#if post.tags.length !== 0}
      <ul class="my-4 space-x-3">
        {#each post.tags as tag (tag)}
          <li class="bg-bg-light inline px-2 py-1 text-sm">#{tag}</li>
        {/each}
      </ul>
    {/if}
  </div>

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <Prose>{@html data.htmlContent}</Prose>

  <div class="text-fg-muted flex flex-wrap justify-center gap-x-8 gap-y-4">
    <SharePostButton {post} />
    <a href={resolve('/blog')} class="hover:text-fg flex cursor-pointer items-center gap-x-2">
      <Fa icon={faMessage} />
      <span>See all posts</span>
    </a>
    <a
      href={resolve('/blog/feed.xml')}
      target="_blank"
      rel="noopener noreferrer"
      class="hover:text-fg flex cursor-pointer items-center gap-x-2"
    >
      <Fa icon={faRssSquare} />
      <span>feed.xml</span>
    </a>
  </div>

  <BottomNavigation {prevPost} {nextPost} />
</Main>

<CommentSection />
