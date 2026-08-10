// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import svelte from '@astrojs/svelte';
import { unified } from '@astrojs/markdown-remark';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import rehypeFigure from 'rehype-figure';
import rehypeExternalLinks from 'rehype-external-links';

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
    },
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [
        rehypeSlug,
        rehypeKatex,
        [
          rehypeAutolinkHeadings,
          { behavior: 'append', content: [{ type: 'text', value: ' #' }] },
        ],
        rehypeFigure,
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
