<script lang="ts">
	import { onMount } from 'svelte';

	import ScrollText from '$lib/components/ScrollText.svelte';
	import CommandPrefix from '$lib/components/CommandPrefix.svelte';
	import { getAge } from '$lib/utils';
	import { Theme } from '$lib/constants';

	const age = getAge(new Date(2006, 7, 31));

	const repos = [
		{ path: 'userlogin', label: 'UserLogin' },
		{ path: 'dankcord', label: 'Dankcord' },
		{ path: 'ascii-converter', label: 'Ascii Converter' },
		{ path: 'undertale-dialogues', label: 'Undertale Dialogues' },
	];

	let theme = Theme.WINDOWS;

	onMount(() => {
		const storedTheme = localStorage.getItem('theme');
		if (Object.values(Theme).includes(storedTheme as Theme)) {
			theme = storedTheme as Theme;
		}
	});

	function applyTheme() {
		document.body.classList.toggle('linux-theme', theme === Theme.LINUX);
	}

	function switchTheme() {
		theme = theme === Theme.WINDOWS ? Theme.LINUX : Theme.WINDOWS;
		applyTheme();
		localStorage.setItem('theme', theme);
	}

	onMount(applyTheme);
</script>

<main>
	<div id="switch" on:click={switchTheme}>
		<div
			style={`float: ${theme === Theme.WINDOWS ? 'left' : 'right'}`}
			id="switch-thumb"
		/>
	</div>

	<h2 id="title">
		<CommandPrefix {theme} /><ScrollText
			text="echo &quot;Hello, world!&quot;"
			{theme}
		/>
	</h2>

	<p id="main-text">
		I'm some {age}-year old who likes coding. <em>A lot</em>, actually.
		Full-stack web developer too (sort of), using primarily the MERN stack. Of
		course, I have done other kinds of projects before apart from web dev, such
		as Discord bots and Minecraft plugins.
	</p>

	<br />
	<p>Also, anime enthusiast and Minecraft fan.</p>

	<h3>Some of my projects:</h3>
	<ul id="repos-list">
		{#each repos as repo}
			<li>
				<a href={`https://github.com/ElCholoGamer/${repo.path}`}>
					{repo.label}
				</a>
			</li>
		{/each}
	</ul>

	<p id="social">
		Follow me on <a href="https://github.com/ElCholoGamer">GitHub</a>!
	</p>
</main>
