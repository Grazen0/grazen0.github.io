<script lang="ts">
	import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';
	import TheStrongestBackground from '$lib/components/TheStrongestBackground.svelte';
	import '../global.css';

	const gtagId = import.meta.env.VITE_GTAG_ID;
</script>

<svelte:head>
	<title>ElCholoGamer.tk</title>
</svelte:head>

{#if typeof gtagId === 'string'}
	<GoogleAnalytics properties={[gtagId]} />
{/if}

<TheStrongestBackground />
<slot />
