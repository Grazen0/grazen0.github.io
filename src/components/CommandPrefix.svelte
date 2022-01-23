<script lang="ts">
	import { Theme } from '../constants.js';

	export let theme: Theme;
</script>

{#if theme === Theme.WINDOWS}
	C:\Users\elchologamer&gt;
{:else}
	<span class="green">elchologamer@elchologamer</span>:<span class="light-blue"
		>~</span
	>${' '}
{/if}
