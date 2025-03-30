<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  export interface Props extends HTMLAttributes<HTMLHeadingElement> {
    mainTitle?: string;
    topic?: string;
    headTopic?: string;
    useAsHeadTitle?: boolean;
  }

  const {
    mainTitle = 'Grazen',
    topic,
    headTopic = topic,
    useAsHeadTitle = true,
    class: className,
    ...props
  }: Props = $props();

  const fullHeadTitle = $derived(headTopic ? `${headTopic} | ${mainTitle}` : mainTitle);
</script>

<svelte:head>
  {#if useAsHeadTitle}
    <title>{fullHeadTitle}</title>
  {/if}
</svelte:head>

<h1 class={['my-6 text-center leading-normal text-3xl font-bold', className]} {...props}>
  {topic ?? mainTitle}
</h1>
