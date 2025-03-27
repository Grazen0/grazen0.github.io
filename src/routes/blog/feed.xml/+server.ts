import { getPublicPosts } from '$lib/blog';
import { links } from '$lib/constants';
import type { RequestHandler } from '@sveltejs/kit';
import { formatRFC7231 } from 'date-fns';
import { XMLBuilder } from 'fast-xml-parser';

export const prerender = true;

export const GET: RequestHandler = async (req) => {
  const posts = await getPublicPosts();

  const obj = {
    rss: {
      '@_version': '2.0',
      '@_xmlns:atom': 'http://www.w3.org/2005/Atom',
      channel: {
        title: "Grazen's Blog",
        link: links.self,
        description: 'A random collection of my thoughts and ideas',
        language: 'en-us',
        copyright: 'Copyright 2025, José Daniel Grayson',
        docs: 'https://www.rssboard.org/rss-specification',
        'atom:link': {
          '@_href': links.self + req.url.pathname,
          '@_rel': 'self',
          '@_type': 'application/rss+xml',
        },
        item: posts.map((post) => {
          const link = `${links.self}/blog/${post.slug}`;
          return {
            title: post.title,
            link,
            description: post.summary,
            author: 'josedanielgrayson@proton.me (Grazen)',
            guid: link,
            pubDate: formatRFC7231(post.createdAt),
          };
        }),
      },
    },
  };

  const builder = new XMLBuilder({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    suppressEmptyNode: true,
  });
  const xmlContent = builder.build(obj);

  return new Response(xmlContent, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
