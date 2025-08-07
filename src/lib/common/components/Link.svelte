<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  export interface Props extends HTMLAnchorAttributes {
    external?: boolean;
  }

  const { external = false, class: className, children, ...props }: Props = $props();
</script>

<a
  class={['text-fg-link hover:underline', className]}
  target={external ? '_blank' : null}
  rel={external ? 'noopener noreferrer' : null}
  {...props}
>
  {@render children?.()}
</a>
