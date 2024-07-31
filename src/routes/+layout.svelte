<script lang="ts">
	import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';
	import TheStrongestBackground from '$lib/components/TheStrongestBackground.svelte';
	import Title from '$lib/Title.svelte';
	import BlogWidget from '$lib/components/BlogWidget.svelte';
	import '../global.css';

	const gtagId = import.meta.env.VITE_GTAG_ID;
</script>

<Title />

{#if typeof gtagId === 'string'}
	<GoogleAnalytics properties={[gtagId]} />
{/if}

<TheStrongestBackground />
<slot />
<BlogWidget />
