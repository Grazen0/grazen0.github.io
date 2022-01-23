<script>
	import { GoogleAnalytics } from '@beyonk/svelte-google-analytics';
	import '../global.css';
</script>

<svelte:head>
	<title>ElCholoGamer.tk</title>
</svelte:head>

<GoogleAnalytics properties={[import.meta.env.VITE_GTAG_ID]} />

<slot />
