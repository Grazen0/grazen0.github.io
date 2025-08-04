<script lang="ts">
  import Link from '$lib/components/Link.svelte';
  import Main from '$lib/components/Main.svelte';
  import Prose from '$lib/components/Prose.svelte';
  import Title from '$lib/components/Title.svelte';
  import { faBluesky, faDiscord, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
  import Fa from 'svelte-fa';

  const links = [
    {
      label: 'Discord',
      to: 'https://discord.com/users/857769260604588052',
      icon: faDiscord,
    },
    {
      label: 'GitHub',
      to: 'https://github.com/Grazen0',
      icon: faGithub,
    },
    {
      label: 'Twitter / X',
      to: 'https://x.com/Grazen0',
      icon: faTwitter,
    },
    {
      label: 'BlueSky',
      to: 'https://bsky.app/profile/grazen0.bsky.social',
      icon: faBluesky,
    },
  ] as const;
</script>

<Main>
  <Title topic="Contact" />
  <Prose>
    <p>Feel free to reach out to me for whatever. Here are some useful links:</p>
    <ul>
      {#each links as link (link.to)}
        <li>
          <Link external href={link.to} class="inline-flex items-center gap-x-2">
            <Fa icon={link.icon} />
            {link.label}
          </Link>
        </li>
      {/each}
    </ul>
  </Prose>
</Main>
