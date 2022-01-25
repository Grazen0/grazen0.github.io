<script lang="ts">
	import Content from '$lib/components/Content.svelte';
	import TerminalWindow from '$lib/components/TerminalWindow.svelte';
	import { notFound as title } from '$lib/ascii.json';

	const goBack = () => history.go(-1);
</script>

<TerminalWindow command="./MyWebsite.sh --not-found">
	<span class="red">{title.join('\n')}</span>
</TerminalWindow>

<main>
	<Content>
		<h1>404 - Page Not Found :/</h1>
		<p>(Maybe you misspelled something?)</p>

		<a href="/">Home</a>
	</Content>
</main>

<style>
	main {
		padding: 2rem;
		margin-bottom: 4rem;
	}
</style>
