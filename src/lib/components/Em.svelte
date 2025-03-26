<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  export interface Props extends HTMLAttributes<HTMLElement> {}

  let { class: className, children, ...props }: Props = $props();
</script>

<em
  class={[
    'text-carp-yellow not-italic drop-shadow-[0_0_0.1rem_theme(colors.carp-yellow/75%)]',
    className,
  ]}
  {...props}
>
  {@render children?.()}
</em>
