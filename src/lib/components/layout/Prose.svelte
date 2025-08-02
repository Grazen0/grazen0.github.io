<script lang="ts">
  import type { Snippet } from 'svelte';

  export interface Props {
    children?: Snippet<[]>;
  }

  const { children }: Props = $props();
</script>

<div class="prose">
  {@render children?.()}
</div>

<style lang="postcss">
  @reference '../../../app.css';

  .prose {
    @apply font-prose my-14 leading-loose;

    :global(> *) {
      @apply my-6;
    }

    :global(h2, h3, h4, h5, h6) {
      @apply mt-10 mb-6 font-semibold;
    }

    :global(h2) {
      @apply text-3xl;
    }

    :global(h3) {
      @apply text-2xl;
    }

    :global(h4) {
      @apply text-xl;
    }

    :global(a) {
      @apply text-fg-link hover:underline;
    }

    :global(ul, ol) {
      @apply marker:text-fg-muted list-outside pl-16;
    }

    :global(ul) {
      @apply list-disc;
    }

    :global(ol) {
      @apply list-decimal;
    }

    :global(figure) {
      @apply text-fg-muted my-12 text-center;
    }

    :global(figure img) {
      @apply mx-auto mb-4 max-h-124;
    }

    :global(figure figcaption) {
      @apply text-fg-muted;
    }

    :global(blockquote) {
      @apply bg-bg-light border-fg-muted my-6 border-l-3 px-4 py-1;
    }

    :global(code) {
      @apply bg-bg-light font-special overflow-x-auto px-1 text-nowrap;
    }

    :global(pre code) {
      @apply px-0 text-wrap;
    }

    :global(pre) {
      @apply bg-bg-light overflow-x-auto px-2 py-1 leading-normal;
    }

    :global(table) {
      @apply mx-auto my-10;
    }

    :global(table th) {
      @apply bg-bg-dark;
    }

    :global(table td, table th) {
      @apply border-bg-light border-2 px-4 py-1;
    }

    /* Stuff here is taken from from the base16 highlight.js theme */
    /* https://github.com/highlightjs/highlight.js/tree/main/src/styles/base16 */

    :global(.hljs::selection, .hljs ::selection) {
      @apply bg-hljs-base02 text-hljs-base05;
    }

    :global(.hljs-comment) {
      @apply text-hljs-base03;
    }

    :global(.hljs-tag) {
      @apply text-hljs-base04;
    }

    :global(.hljs-subst, .hljs-punctuation, .hljs-operator) {
      @apply text-hljs-base05;
    }

    :global(.hljs-operator) {
      @apply opacity-70;
    }

    :global(
      .hljs-bullet,
      .hljs-variable,
      .hljs-template-variable,
      .hljs-selector-tag,
      .hljs-name,
      .hljs-deletion
    ) {
      @apply text-hljs-base08;
    }

    :global(
      .hljs-symbol,
      .hljs-number,
      .hljs-link,
      .hljs-attr,
      .hljs-variable.constant_,
      .hljs-literal
    ) {
      @apply text-hljs-base09;
    }

    :global(.hljs-title, .hljs-class .hljs-title, .hljs-title.class_) {
      @apply text-hljs-base0a;
    }

    :global(.hljs-strong) {
      @apply text-hljs-base0a font-bold;
    }

    :global(.hljs-code, .hljs-addition, .hljs-title.class_.inherited__, .hljs-string) {
      @apply text-hljs-base0b;
    }

    :global(.hljs-built_in, .hljs-doctag, .hljs-quote, .hljs-keyword.hljs-atrule, .hljs-regexp) {
      @apply text-hljs-base0c;
    }

    :global(
      .hljs-function .hljs-title,
      .hljs-attribute,
      .ruby .hljs-property,
      .hljs-title.function_,
      .hljs-section
    ) {
      @apply text-hljs-base0d;
    }

    :global(.hljs-type, .hljs-template-tag, .diff .hljs-meta, .hljs-keyword) {
      @apply text-hljs-base0e;
    }

    :global(.hljs-emphasis) {
      @apply text-hljs-base0e italic;
    }

    :global(.hljs-meta, .hljs-meta .hljs-keyword, .hljs-meta .hljs-string) {
      @apply text-hljs-base0f;
    }

    :global(.hljs-meta .hljs-keyword, .hljs-meta-keyword) {
      @apply font-bold;
    }
  }
</style>
