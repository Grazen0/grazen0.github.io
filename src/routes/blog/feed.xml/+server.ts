import { getPublicPosts } from '$lib/blog';
import { links } from '$lib/constants';
import { renderContentToHtml } from '$lib/render';
import type { RequestHandler } from '@sveltejs/kit';
import dayjs from 'dayjs';
import { XMLBuilder } from 'fast-xml-parser';

export const prerender = true;

export const GET: RequestHandler = async (req) => {
  const posts = await getPublicPosts();
  const currentDate = new Date();

  const feedObj = {
    '?xml': {
      '@_version': '1.0',
      '@_encoding': 'utf-8',
    },
    feed: {
      '@_xmlns': 'http://www.w3.org/2005/Atom',
      title: "Grazen's Blog",
      subtitle: 'A random collection of my thoughts and ideas.',
      updated: dayjs(currentDate).toISOString(),
      author: {
        name: 'Grazen',
        email: 'josedanielgrayson@proton.me',
        uri: links.self,
      },
      id: links.self + req.url.pathname,
      link: [
        {
          '@_href': `${links.self}/blog`,
        },
        {
          '@_rel': 'self',
          '@_type': 'application/atom+xml',
          '@_href': links.self + req.url.pathname,
        },
      ],
      rights: 'Copyright (c) 2025, José Daniel Grayson',
      entry: posts.map((post) => {
        const postUrl = `${links.self}/blog/${post.slug}`;
        return {
          title: post.title,
          summary: post.summary,
          link: {
            '@_href': postUrl,
          },
          id: postUrl,
          published: dayjs(post.createdAt).toISOString(),
          updated: dayjs(post.updatedAt ?? post.createdAt).toISOString(),
          content: {
            '@_type': 'html',
            '#text': renderContentToHtml(post.content),
          },
        };
      }),
    },
  };

  const builder = new XMLBuilder({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    suppressEmptyNode: true,
  });
  const feedXml = builder.build(feedObj);

  return new Response(feedXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
