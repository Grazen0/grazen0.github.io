<script lang="ts">
  import type { Post } from '../posts';
  import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  export interface Props {
    post: Post;
    highlightDuration?: number;
  }

  const { post, highlightDuration = 1000 }: Props = $props();

  let status = $state<'copied' | null>(null);
  let resetTimeout: ReturnType<typeof setTimeout> | null = null;

  const sharePost = () => {
    const postUrl = `/blog/${post.id}`;

    if (navigator.share) {
      navigator.share({
        url: postUrl,
        title: post.data.title,
      });
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(postUrl);
      status = 'copied';

      if (resetTimeout !== null) clearTimeout(resetTimeout);

      resetTimeout = setTimeout(() => {
        status = null;
      }, highlightDuration);
    }
  };
</script>

<button
  onclick={sharePost}
  class={[
    'flex cursor-pointer items-center gap-x-2',
    status === 'copied' ? 'text-fg-stronger' : 'hover:text-fg ',
  ]}
>
  <Fa icon={faShareAlt} />
  <span>{status === 'copied' ? 'Link copied' : 'Share'}</span>
</button>
