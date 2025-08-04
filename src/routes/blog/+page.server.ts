import { getPublishedPosts } from '$lib/blog/renderer/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const posts = getPublishedPosts();
  return { posts };
};
