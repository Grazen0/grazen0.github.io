<script lang="ts">
  import type { Snippet } from 'svelte';

  export interface Props {
    children?: Snippet<[]>;
  }

  const { children }: Props = $props();
</script>

<main class="mx-auto max-w-4xl px-6 py-8">
  {@render children?.()}
</main>
