<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  export interface Props extends HTMLAttributes<HTMLHeadingElement> {
    mainTitle?: string;
    topic?: string;
    useAsHeadTitle?: boolean;
  }

  const { mainTitle = 'Grazen', topic, class: className, ...props }: Props = $props();
</script>

<h1 class={['my-6 text-center text-3xl leading-normal font-bold', className]} {...props}>
  {topic ?? mainTitle}
</h1>
