import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export async function getVisiblePosts() {
  return await getCollection(
    'blog',
    ({ data }) => !!data.pubDate || import.meta.env.DEV,
  );
}

export function comparePosts(a: Post, b: Post) {
  if (!a.data.pubDate) return -1;
  if (!b.data.pubDate) return 1;
  return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
}
