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
		const delay = progress < command.length ? randomRange(80, 150) : 400;
		progressTimer = setTimeout(scroll, delay);
	} else {
		blinkTimer = setInterval(blink, 500);
	}

	onDestroy(() => {
		clearTimeout(progressTimer);
		clearInterval(blinkTimer);
	});

	$: lineProps = {
		username,
		desktopName,
	};
</script>

<div class="container">
	<div {...$$restProps} class="terminal">
		<div class="head">
			<div class="buttons">
				<img src="/assets/images/x-icon.svg" alt="" />
				<img src="/assets/images/min-icon.svg" alt="" />
				<img src="/assets/images/sq-icon.svg" alt="" />
			</div>
			{username}@{desktopName}: ~
		</div>
		<!-- prettier-ignore -->
		<pre class="content">
<CommandLine {...lineProps} cursor={scrolling}>{command.substring(0, progress)}</CommandLine>
{#if !scrolling}
<slot /><br />
<CommandLine {...lineProps} cursor={cursorVisible} />
{/if}
		</pre>
	</div>
</div>

<style lang="scss">
	$background: #300a24;

	.container {
		padding: 2rem 0;
	}

	.terminal {
		margin: 0 auto;
		border-radius: 10px 10px 0 0;
		color: white;
		font-size: 1.4rem;
		font-family: 'Ubuntu Mono', Consolas, monospace;
		box-shadow: 0 0 25px 1px #161616;

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
		background-color: $background;
		min-height: 300px;

		&::selection {
			background: white;
			color: $background;
		}

		& :global(*)::selection {
			background: white;
			color: $background;
		}
	}

	@media screen and (max-width: 850px) {
		.terminal {
			font-size: 1rem;
		}
	}
</style>
