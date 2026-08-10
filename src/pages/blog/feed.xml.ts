import type { APIContext } from 'astro';
import { SITE_DESCRIPTION, SITE_TITLE } from '../../consts';
import rss from '@astrojs/rss';
import { getVisiblePosts } from '../../posts';

export async function GET(context: APIContext) {
  const posts = await getVisiblePosts();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site ?? 'http://nosite.com',
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.id}/`,
    })),
  });
}
