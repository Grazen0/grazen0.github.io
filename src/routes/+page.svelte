<script lang="ts">
	import Terminal from '$lib/components/Terminal.svelte';
	import { HOME_BANNER, HOME_BANNER_SMALL } from '$lib/ascii';
	import Em from '$lib/components/Em.svelte';
	import Link from '$lib/components/Link.svelte';

	let useSmallAscii = $state(false);

	const handleResize = (
		ev: UIEvent & { currentTarget: EventTarget & Window }
	): void => {
		useSmallAscii = ev.currentTarget.innerWidth < 550;
	};
</script>

<svelte:window on:resize={handleResize} />

<div class="p-8">
	<Terminal
		class={useSmallAscii ? 'min-h-[22rem]' : 'min-h-64'}
		command="./awesome_website"
		output={useSmallAscii ? HOME_BANNER_SMALL : HOME_BANNER}
	/>

	<main class="my-8">
		<p class="my-6">
			Hey, I'm <Em>Grazen</Em>. Just a random guy on the internet who's
			passionate about programming. Currently majoring in Computer Science.
		</p>

		<p class="my-6">
			I've dipped into Discord bots, a bit of game development, Minecraft
			plugins, Terraria modding, web development, and low-level programming; the
			latter being my current interest in particular.
		</p>

		<p>
			Lately, I've fallen deep into the Linux rabbit hole. I currently use <Link
				external
				href="https://nixos.org/">NixOS</Link
			> (btw), <Link external href="https://neovim.io/">Neovim</Link>, and other
			awesome FOSS tools.
		</p>

		<h2 class="text-3xl font-bold mt-8 mb-4">Cool stuff I've made</h2>

		<ul class="list-disc list-inside my-6">
			<li>
				<Link external href="https://github.com/Grazen0/nixos-config"
					>nixos-config</Link
				>: My personal NixOS configuration.
			</li>
			<li>
				<Link external href="https://github.com/Grazen0/chip-8-rs"
					>chip-8-rs</Link
				>: A portable CHIP-8 emulator written in Rust.
			</li>
			<li>
				<Link external href="https://github.com/Grazen0/space-invaders"
					>space-invaders</Link
				>: A Space Invaders emulator written in Rust.
			</li>
			<li>
				<Link external href="https://github.com/Grazen0/nes-pong">nes-pong</Link
				>: A really simple Pong game for the NES.
			</li>
		</ul>

		<h2 class="text-3xl font-bold mt-8 mb-4">Contact me</h2>

		<p class="my-6">
			Feel free to send me a friend request on my Discord, <Em>grazen0</Em>.
		</p>

		<p class="my-6">Here are some other useful links:</p>

		<ul class="list-disc list-inside my-6">
			<li><Link external href="https://github.com/Grazen0">GitHub</Link></li>
			<li><Link external href="https://x.com/Grazen0">Twitter</Link></li>
			<li>
				<Link external href="https://www.youtube.com/@grazen0">YouTube</Link>
			</li>
		</ul>
	</main>
</div>
