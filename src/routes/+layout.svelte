<script lang="ts">
  import Title from '$lib/components/Title.svelte';
  import '../app.css';
  import type { LayoutProps } from './$types';

  const { children }: LayoutProps = $props();
</script>

<Title />

<div class="max-w-3xl mx-auto py-10 text-md sm:text-lg">
  {@render children()}
</div>
