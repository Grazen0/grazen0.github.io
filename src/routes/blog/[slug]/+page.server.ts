import { postRenderer } from '$lib/blog/blog';
import { getPublishedPosts } from '$lib/blog/renderer/posts';
import type { EntryGenerator, PageServerLoad } from './$types';
import readingTime from 'reading-time';

export const entries: EntryGenerator = () => {
  const posts = getPublishedPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

export const load: PageServerLoad = ({ params }) => {
  const posts = getPublishedPosts();

  const postIndex = posts.findIndex((post) => post.slug === params.slug);
  if (postIndex === -1) {
    throw new Error(`post with slug "${params.slug}" not found`);
  }

  const post = posts[postIndex];

  return {
    post,
    htmlContent: postRenderer.render(post.content),
    stats: readingTime(post.content),
    prevPost: posts[postIndex + 1],
    nextPost: posts[postIndex - 1],
  };
};
