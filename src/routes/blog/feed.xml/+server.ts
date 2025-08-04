import { getPublishedPosts } from '$lib/blog/renderer/posts';
import { generateBlogFeed } from '$lib/blog/renderer/rss';
import type { RequestHandler } from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = () => {
  const posts = getPublishedPosts();
  const feedXml = generateBlogFeed(posts);

  return new Response(feedXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
