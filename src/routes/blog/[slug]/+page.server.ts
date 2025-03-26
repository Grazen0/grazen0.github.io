import { getPublicPosts } from '$lib/blog';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = async () => {
  const posts = await getPublicPosts();
  return posts.map((post) => ({ slug: post.slug }));
};

export const load: PageServerLoad = async ({ params }) => {
  const posts = await getPublicPosts();

  const postIndex = posts.findIndex((post) => post.slug === params.slug);
  if (postIndex === -1) {
    throw new Error(`post with slug "${params.slug}" not found`);
  }

  return {
    post: posts[postIndex],
    prevPost: posts[postIndex + 1],
    nextPost: posts[postIndex - 1],
  };
};
