<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  export interface Props extends HTMLAttributes<HTMLElement> {}

  let { class: className, children, ...props }: Props = $props();
</script>

<strong
  class={['text-fg-stronger drop-shadow-[0_0_0.1rem_theme(--color-fg-stronger/60%)] ', className]}
  {...props}
>
  {@render children?.()}
</strong>
