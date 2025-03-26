<script lang="ts">
  import Main from '$lib/components/layout/Main.svelte';
  import Prose from '$lib/components/layout/Prose.svelte';
  import Title from '$lib/components/layout/Title.svelte';
  import { formatDatePretty } from '$lib/dates';
  import type { PageProps } from './$types';
  import BottomNavigation from './BottomNavigation.svelte';
  import CommentSection from './CommentSection.svelte';
  import markdownIt from 'markdown-it';
  import mdHighlightJs from 'markdown-it-highlightjs';
  import mdImplicitFigures from 'markdown-it-implicit-figures';
  import mdTexmath from 'markdown-it-texmath';
  import readingTime from 'reading-time/lib/reading-time';
  import 'katex/dist/katex.min.css';

  const { data }: PageProps = $props();
  const { post, prevPost, nextPost } = data;

  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
  })
    .use(mdImplicitFigures, {
      figcaption: 'title',
      keepAlt: true,
      lazyLoading: true,
    })
    .use(mdTexmath)
    .use(mdHighlightJs, { inline: true, auto: false });

  const stats = $derived(readingTime(post.content));
  const htmlContent = $derived(md.render(post.content));
</script>

<Main>
  <Title topic={post.title} class="mb-6" />
  <div class="mb-4 text-center">
    {formatDatePretty(post.createdAt)} &mdash; {stats.words} words, {stats.text}

    {#if post.tags.length !== 0}
      <ul class="space-x-2 my-2">
        {#each post.tags as tag (tag)}
          <li class="bg-bg-dark inline px-2 py-1 text-sm">#{tag}</li>
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
