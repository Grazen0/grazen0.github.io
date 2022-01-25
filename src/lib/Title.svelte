<script lang="ts">
	export let topic = '';
	export let mainTitle = 'ElCholoGamer';

	$: fullTitle = topic ? `${topic} | ${mainTitle}` : mainTitle;
</script>

<svelte:head>
	<title>{fullTitle}</title>
</svelte:head>
