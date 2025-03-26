import { getPublicPosts } from '$lib/blog';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const posts = await getPublicPosts();
  return { posts };
};
