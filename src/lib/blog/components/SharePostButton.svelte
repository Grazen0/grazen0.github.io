<script lang="ts">
  import { resolveAbsolute } from '$lib/common/paths';
  import type { Post } from '../schemas';
  import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';

  export interface Props {
    post: Post;
  }

  const { post }: Props = $props();

  let status = $state<'copied' | null>(null);
  let resetTimeout: ReturnType<typeof setTimeout> | null = null;

  const sharePost = () => {
    const postUrl = resolveAbsolute('/blog/[slug]', { slug: post.slug });

    if (navigator.share) {
      navigator.share({
        url: postUrl,
        title: post.title,
        text: post.summary,
      });
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(postUrl);
      status = 'copied';

      if (resetTimeout !== null) clearTimeout(resetTimeout);

      resetTimeout = setTimeout(() => {
        status = null;
      }, 1000);
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
