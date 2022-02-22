<script lang="ts">
	import { home as title } from '$lib/ascii.json';
	import Content from '$lib/components/Content.svelte';
	import TerminalWindow from '$lib/components/TerminalWindow.svelte';
	import { getAge } from '$lib/utils';

	const age = getAge(new Date(2006, 7, 31));

	const github = 'https://github.com/ElCholoGamer';

	const projects = [
		{ repo: 'chip-8', label: 'CHIP-8', text: 'A CHIP-8 emulator written in TypeScript' },
		{ repo: 'amazing', label: 'Amazing', text: 'The tool for all of your maze-solving needs' },
		{
			repo: 'undertale-dialogues',
			label: 'Undertale Dialogues',
			text: 'An API for generating Undertale dialog boxes',
		},
		{
			repo: 'video-ascii',
			label: 'Video ASCII',
			text: 'A tool to play videos as ASCII text',
		},
	];
</script>

<TerminalWindow
	title="I don't actually use Linux, but this looks pretty cool!"
	command="./MyWebsite.sh"
>
	<span class="yellow">
		<span class="wrappedTitle">{title.wrapped.join('\n')}</span><span class="fullTitle"
			>{title.full.join('\n')}</span
		>
	</span>
</TerminalWindow>

<main>
	<Content>
		<h1>Hey there! It's <em class="yellow fs-normal">ElCholoGamer</em>.</h1>
		<section>
			<p>
				I'm some random {age}-year old who likes to code
				<span title="(Maybe a bit too much?)">a lot</span>. Been programming for about 2 or 3 years
				now. Wouldn't really call most of it "experience", though, since it was mostly messing
				around with stuff.
			</p>
			<p>
				I've dipped into Discord bots, videogames, Minecraft plugins, Terraria modding, and web
				development; the latter being my main focus.
			</p>
			<p>
				Also, I think this monospace aesthetic is pretty cool. You might wanna thank <a
					href="https://adventofcode.com">Advent of Code</a
				> for that.
			</p>
		</section>
		<section>
			<h2>Some of my projects</h2>
			<ul>
				{#each projects as { label, repo, text }}
					<li>
						<a href={`${github}/${repo}`}>{label}</a> - {text}
					</li>
				{/each}
			</ul>
		</section>
		<section>
			<h2>Contact</h2>
			<p>
				You can find me on Discord as <em class="fs-normal yellow">ElCholoGamer#8225</em>, or check
				out my <a href={github}>GitHub profile</a>. (Oh yeah, I also have a
				<a href="https://twitter.com/ElCholoGamer">Twitter</a> and a
				<a href="https://www.youtube.com/channel/UClmqXQiLYfIrvQKfr40nMyg">YouTube channel</a>)
			</p>
		</section>
		<p>
			<small>
				Feel free to check out this website's source code <a
					href={`${github}/elchologamer.github.io`}>here</a
				>!
			</small>
		</p>
	</Content>
</main>

<style lang="scss">
	.wrappedTitle {
		display: none;
	}

	main {
		padding: 2rem;
		margin-bottom: 4rem;
	}

	@media screen and (max-width: 620px) {
		.fullTitle {
			display: none;
		}

		.wrappedTitle {
			display: inline;
		}
	}
</style>
