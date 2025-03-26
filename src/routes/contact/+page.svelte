<script lang="ts">
  import Link from '$lib/components/Link.svelte';
  import Stronger from '$lib/components/Stronger.svelte';
  import Main from '$lib/components/layout/Main.svelte';
  import Prose from '$lib/components/layout/Prose.svelte';
  import Title from '$lib/components/layout/Title.svelte';
</script>

<Main>
  <Title topic="Contact" />
  <Prose>
    <p>
      Feel free to send me a friend request on my Discord, <Stronger>grazen0</Stronger>. You can
      also reach out to me with these links:
    </p>
    <ul>
      <li><Link external href="https://github.com/Grazen0">GitHub</Link></li>
      <li><Link external href="https://x.com/Grazen0">Twitter</Link></li>
    </ul>
  </Prose>
</Main>
