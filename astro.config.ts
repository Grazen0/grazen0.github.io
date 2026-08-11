import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import {
  transformerNotationHighlight,
  transformerRenderIndentGuides,
} from '@shikijs/transformers';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import remarkMath from 'remark-math';

// https://astro.build/config
export default defineConfig({
  site: 'https://grazen.xyz',
  integrations: [mdx(), sitemap(), svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: 'kanagawa-lotus',
        dark: 'kanagawa-wave',
      },
      transformers: [
        transformerNotationHighlight(),
        transformerRenderIndentGuides(),
      ],
      // defaultColor: false,
    },
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        rehypeKatex,
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'append' }],
        [
          rehypeExternalLinks,
          {
            target: '_blank',
            rel: ['noopener noreferer'],
            content: { type: 'text', value: ' ↗' },
          },
        ],
      ],
    }),
  },
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Commit Mono',
      cssVariable: '--font-commit-mono',
      weights: [400, 500, 600, 700],
    },
  ],
});
