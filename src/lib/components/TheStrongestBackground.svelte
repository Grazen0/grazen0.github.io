<script lang="ts">
	import { onMount } from 'svelte';
	import { BackgroundScene } from '$lib/background/scene';
	import { randomRange } from '$lib/utils';

	let canvas: HTMLCanvasElement;

	onMount(async () => {
		// canvas.oncontextmenu = e => {
		// 	e.preventDefault();
		// 	e.stopPropagation();
		// };
		const gl = canvas.getContext('webgl');
		if (!gl) return;

		const scene = await BackgroundScene.init(gl, '/assets/images/cirno_prism.png');

		for (let i = 0; i < 30; i++) {
			const prism = scene.addPrism();
			prism.position[1] = randomRange(-12, 16);
		}

		scene.start();

		return () => scene.stop();
	});
</script>

<canvas
	bind:this={canvas}
	on:contextmenu|preventDefault|stopPropagation
	width="1280"
	height="720" />

<style>
	canvas {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 50%;
		left: 50%;

		transform: translate(calc(-50% - 0.5px), calc(-50% - 0.5px));
		z-index: -9999;
	}
</style>
