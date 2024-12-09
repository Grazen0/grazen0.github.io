<script lang="ts">
	export let topic: string | null = null;
	export let mainTitle = 'Grazen';

	$: fullTitle = topic ? `${topic} | ${mainTitle}` : mainTitle;
</script>

<svelte:head>
	<title>{fullTitle}</title>
</svelte:head>
