<script lang="ts">
  import { asciiBanner } from '$lib/common/constants';
  import Link from '$lib/components/Link.svelte';
  import Main from '$lib/components/Main.svelte';
  import Prose from '$lib/components/Prose.svelte';
  import Stronger from '$lib/components/Stronger.svelte';
  import Title from '$lib/components/Title.svelte';
</script>

<Main>
  <Title class="sm:visually-hidden" />

  <div class="text-center">
    <pre class="hidden font-mono leading-snug font-bold sm:inline-block">
      {asciiBanner}
    </pre>
  </div>

  <Prose>
    <p>
      I'm José Daniel Grayson (aka <Stronger>Grazen</Stronger>), an 18-year-old guy who lives in
      this weird (but awesome) country called Peru. I'm currently majoring in Computer Science and
      like to do lots of programming as a hobby.
    </p>
    <p>
      I've dipped into Discord bots, a bit of game development, Minecraft plugins, Terraria modding,
      web development, but my main interest is currently low-level programming. I suppose that by
      the time I graduate I'll have dipped into a lot of other stuff, too.
    </p>
    <p>
      Lately, I've fallen <em>deep</em> into the Linux rabbit hole. I use
      <Link external href="https://nixos.org/">NixOS</Link> (btw),
      <Link external href="https://neovim.io/">Neovim</Link>, and other awesome FOSS tools.
    </p>

    <h2>Cool stuff I've made</h2>
    <ul>
      <li>
        <Link external href="https://github.com/Grazen0/nixos-config">NixOS Config</Link>: My
        personal NixOS configurations.
      </li>
      <li>
        <Link external href="https://github.com/Grazen0/gemu">Gemu</Link>: a Game Boy emulator
        written in C.
      </li>
      <li>
        <Link external href="https://github.com/Grazen0/space-invaders">Space Invaders</Link>: A
        Space Invaders emulator written in Rust.
      </li>
      <li>
        <Link external href="https://github.com/Grazen0/nes-pong">NES Pong</Link>: A really simple
        Pong game for the NES.
      </li>
    </ul>
  </Prose>
</Main>
