<script lang="ts">
  import { base } from '$app/paths';
  import { NOT_FOUND_BANNER } from '$lib/ascii';
  import Link from '$lib/components/Link.svelte';
  import Terminal from '$lib/components/Terminal.svelte';
  import Title from '$lib/components/Title.svelte';
</script>

<Title topic="Not Found" />

<div class="p-8">
  <Terminal class="min-h-60" command="./awesome_website --not-found" output={NOT_FOUND_BANNER} />

  <main class="my-8">
    <h1 class="text-3xl text-center font-bold mb-14">404 Page Not Found</h1>

    <p class="my-6">Maybe you misspelled something?</p>

    <p>
      Since you're here, why not go around and check out the <Link href="{base}/">homepage</Link>?
    </p>
  </main>
</div>
