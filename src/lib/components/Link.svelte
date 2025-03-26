<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  interface Props extends HTMLAnchorAttributes {
    external?: boolean;
  }

  let { external = false, class: className, children, ...props }: Props = $props();
</script>

<a
  class={['text-spring-blue hover:underline', className]}
  target={external ? '_blank' : null}
  rel={external ? 'noopener noreferrer' : null}
  {...props}
>
  {@render children?.()}
</a>
