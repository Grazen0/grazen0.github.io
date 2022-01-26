<script lang="ts">
	import { onMount } from 'svelte';
	import { BackgroundScene } from '$lib/background/scene';

	let canvas: HTMLCanvasElement;

	onMount(async () => {
		const gl = canvas.getContext('webgl');
		if (!gl) return;

		const scene = await BackgroundScene.init(gl);
		scene.start();

		return () => scene.stop();
	});
</script>

<canvas
	bind:this={canvas}
	on:contextmenu|preventDefault|stopPropagation
	width="1280"
	height="720"
/>

<style>
	canvas {
		width: 100%;
		height: 100%;
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -9999;

		background-color: #94baff;
	}
</style>
