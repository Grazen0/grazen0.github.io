<script>
	import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';
	import '../global.css';

	const gtagId = import.meta.env.VITE_GTAG_ID;
</script>

<svelte:head>
	<title>ElCholoGamer.tk</title>
</svelte:head>

{#if typeof gtagId === 'string'}
	<GoogleAnalytics properties={[gtagId]} />
{/if}

<slot />
