<script lang="ts">
  import Link from '$lib/components/Link.svelte';
  import Stronger from '$lib/components/Stronger.svelte';
  import Main from '$lib/components/layout/Main.svelte';
  import Prose from '$lib/components/layout/Prose.svelte';
  import Title from '$lib/components/layout/Title.svelte';
  import { asciiBanner } from '$lib/constants';
</script>

<Main>
  <Title class="sm:visually-hidden" />

  <div class="text-center">
    <pre class="leading-snug hidden sm:inline-block font-mono font-bold">
      {asciiBanner}
      </pre>
  </div>

  <Prose>
    <p>
      Yo. I'm José Daniel Grayson (aka <Stronger>Grazen</Stronger>), a 18-year-old guy who lives in
      this weird (but awesome) country called Peru. I'm currently majoring in Computer Science and
      like to do lots of programming as a side hobby.
    </p>
    <p>
      I've dipped into Discord bots, a bit of game development, Minecraft plugins, Terraria modding,
      web development, and low-level programming; the latter being my current interest in
      particular. I suppose that by the time I graduate I'll have dipped into a lot other stuff,
      too.
    </p>
    <p>
      Lately, I've fallen deep into the Linux rabbit hole. I use <Link
        external
        href="https://nixos.org/">NixOS</Link
      > (btw), <Link external href="https://neovim.io/">Neovim</Link>, and other awesome FOSS tools.
    </p>

    <h2>Cool stuff I've made</h2>
    <ul>
      <li>
        <Link external href="https://github.com/Grazen0/nixos-config">nixos-config</Link>: My
        personal NixOS configurations.
      </li>
      <li>
        <Link external href="https://github.com/Grazen0/chip-8-rs">chip-8-rs</Link>: A portable
        CHIP-8 emulator written in Rust.
      </li>
      <li>
        <Link external href="https://github.com/Grazen0/space-invaders">space-invaders</Link>: A
        Space Invaders emulator written in Rust.
      </li>
      <li>
        <Link external href="https://github.com/Grazen0/nes-pong">nes-pong</Link>: A really simple
        Pong game for the NES.
      </li>
    </ul>
  </Prose>
</Main>
