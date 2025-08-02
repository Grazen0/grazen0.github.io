<script lang="ts">
  import Main from '$lib/components/layout/Main.svelte';
  import Prose from '$lib/components/layout/Prose.svelte';
  import Title from '$lib/components/layout/Title.svelte';
  import { faArrowLeft, faHouse, faMessage } from '@fortawesome/free-solid-svg-icons';
  import Fa from 'svelte-fa';
</script>

<Main>
  <Title topic="404 - Page Not Found" headTopic="Page Not Found" />
  <div class="text-center text-lg">
    <Prose>Maybe you misspelled something?</Prose>
  </div>
  <div class="flex justify-center gap-4 text-sm sm:text-base">
    <a
      href="/"
      class="text-fg-muted hover:text-fg border-fg-muted hover:border-fg inline-flex items-center justify-center gap-x-3 border px-3 py-2"
    >
      <Fa icon={faHouse} />
      <span class="text-nowrap">Home</span>
    </a>
    <a
      href="/blog"
      class="text-fg-muted hover:text-fg border-fg-muted hover:border-fg inline-flex items-center justify-center gap-x-3 border px-3 py-2"
    >
      <Fa icon={faMessage} />
      <span class="text-nowrap">Blog</span>
    </a>
    <button
      onclick={() => window.history.back()}
      class="text-fg-muted hover:text-fg border-fg-muted hover:border-fg inline-flex cursor-pointer items-center justify-center gap-x-3 border px-3 py-2"
    >
      <Fa icon={faArrowLeft} />
      <span class="text-nowrap">Go back</span>
    </button>
  </div>
</Main>
