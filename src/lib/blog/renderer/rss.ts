import { postRenderer } from '$lib/blog/blog';
import type { Post } from '$lib/blog/schemas';
import { links } from '$lib/common/constants';
import { dayjs } from '$lib/common/dayjs';
import { resolveAbsolute } from '$lib/common/paths';
import { XMLBuilder } from 'fast-xml-parser';

export const RSS_ID = 'https://grazen0.github.io';

const postToFeedEntry = (post: Post) => {
  const postUrl = resolveAbsolute('/blog/[slug]', { slug: post.slug });

  return {
    title: post.title,
    summary: post.summary,
    link: { '@_href': postUrl },
    id: postUrl,
    published: dayjs.utc(post.createdAt).toISOString(),
    updated: dayjs.utc(post.updatedAt ?? post.createdAt).toISOString(),
    content: {
      '@_type': 'html',
      '#text': postRenderer.render(post.content),
    },
  };
};

export const generateBlogFeed = (posts: Post[]) => {
  const feedObj = {
    '?xml': {
      '@_version': '1.0',
      '@_encoding': 'utf-8',
    },
    feed: {
      '@_xmlns': 'http://www.w3.org/2005/Atom',
      title: "Grazen's Blog",
      subtitle: 'A random collection of my thoughts and ideas.',
      updated: dayjs.utc().toISOString(),
      author: {
        name: 'Grazen',
        email: 'josedanielgrayson@proton.me',
        uri: links.self,
      },
      id: 'https://grazen0.github.io',
      link: [
        { '@_href': resolveAbsolute('/blog') },
        {
          '@_rel': 'self',
          '@_type': 'application/atom+xml',
          '@_href': resolveAbsolute('/blog/feed.xml'),
        },
      ],
      rights: 'Copyright (c) 2025, José Daniel Grayson',
      entry: posts.map(postToFeedEntry),
    },
  };

  const builder = new XMLBuilder({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    suppressEmptyNode: true,
  });

  return builder.build(feedObj);
};
