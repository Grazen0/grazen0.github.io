<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import '../global.css';
</script>

<Title />

<div class="max-w-3xl mx-auto my-10 text-md sm:text-lg">
	<slot />
</div>
