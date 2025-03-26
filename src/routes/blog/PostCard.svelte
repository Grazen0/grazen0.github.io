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

<!-- TODO: add tags -->
<li class={['not-first:mt-4 bg-bg-light hover:no-underline', className]} {...props}>
  <a href="{base}/blog/{post.slug}" class="block px-4 py-2">
    <h2 class="text-lg font-semibold">{post.title}</h2>
    <p>{post.summary}</p>
    <p class="text-sm">{formatDatePretty(post.createdAt)}</p>
  </a>
</li>
