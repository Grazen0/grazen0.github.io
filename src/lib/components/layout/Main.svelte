<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  export interface Props extends HTMLAttributes<HTMLElement> {}

  const { children, class: className, ...props }: Props = $props();
</script>

<main class={['mx-auto max-w-3xl px-6 py-8', className]} {...props}>
  {@render children?.()}
</main>
