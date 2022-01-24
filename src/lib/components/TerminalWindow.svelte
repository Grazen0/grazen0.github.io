<script lang="ts">
	import { onDestroy } from 'svelte';
	import { randomRange } from '$lib/utils';
	import CommandLine from './CommandLine.svelte';

	export let command: string;
	export let username = 'elchologamer';
	export let desktopName = 'desktop';

	let progress = 0;
	let cursorVisible = true;
	let progressTimer: ReturnType<typeof setTimeout>;
	let blinkTimer: ReturnType<typeof setInterval>;

	const blink = () => (cursorVisible = !cursorVisible);
	const scroll = () => progress++;

	$: scrolling = progress <= command.length;

	$: if (scrolling) {
		const delay = progress < command.length ? randomRange(100, 160) : 400;
		progressTimer = setTimeout(scroll, delay);
	} else {
		blinkTimer = setInterval(blink, 500);
	}

	onDestroy(() => {
		clearTimeout(progressTimer);
		clearInterval(blinkTimer);
	});
</script>

<div {...$$restProps} class="terminal">
	<div class="head">
		<div class="buttons">
			<img src="/assets/images/x-icon.svg" alt="" />
			<img src="/assets/images/min-icon.svg" alt="" />
			<img src="/assets/images/sq-icon.svg" alt="" />
		</div>
		{username}@{desktopName}: ~
	</div>
	<pre class="content">
<CommandLine {username} {desktopName} cursor={scrolling}
			>{command.substring(0, progress)}</CommandLine>
{#if !scrolling}<slot />

<CommandLine
				{username}
				{desktopName}
				cursor={cursorVisible} />
		{/if}
	</pre>
</div>

<style lang="scss">
	.terminal {
		border-radius: 10px 10px 0 0;
		font-size: 1.4rem;
		color: white;
		font-family: 'Ubuntu Mono', Consolas, monospace;
		box-shadow: 0 0 25px 2px #161616;

		width: 900px;
		max-width: 90%;
		overflow: hidden;
	}

	.head {
		padding: 0.2rem;
		background-image: linear-gradient(to bottom, #625f56, #41443b);
		border-radius: 8px 8px 0 0;

		display: flex;
		align-items: center;
	}

	.buttons {
		display: flex;
		align-items: center;
		margin: 0 0.8rem;

		> img {
			width: 1em;
			height: 1em;
			cursor: pointer;
		}
	}

	.content {
		margin: 0;
		font-family: inherit;
		background-color: #300a24;
		min-height: 300px;
	}

	@media screen and (max-width: 850px) {
		.terminal {
			font-size: 1rem;
		}
	}
</style>
