<script lang="ts">
	import { onDestroy } from 'svelte';
	import { cursors, Theme } from '../constants';

	export let text: string;
	export let theme: Theme;

	let scrolling = true;
	let progress = 0;
	let cursorVisible = true;

	let progressTimer: ReturnType<typeof setTimeout>;
	let blinkTimer: ReturnType<typeof setInterval>;

	function scroll() {
		progress++;
		if (progress >= text.length) scrolling = false;
	}

	const blink = () => (cursorVisible = !cursorVisible);

	function handleKeyDown(e: KeyboardEvent) {
		if (['Backspace', 'Delete'].includes(e.key)) {
			if (progress > 0) progress--;
		} else if (e.key.length === 1 && progress < text.length) {
			progress++;
		}
	}

	$: if (progress >= 0) {
		cursorVisible = true;

		if (blinkTimer) clearInterval(blinkTimer);
		blinkTimer = setInterval(blink, 500);

		if (scrolling) {
			const delay = Math.floor(Math.random() * 125) + 50;
			progressTimer = setTimeout(scroll, delay);
		}
	}

	$: if (!scrolling) {
		document.addEventListener('keydown', handleKeyDown);
	}

	onDestroy(() => {
		clearTimeout(progressTimer);
		clearInterval(blinkTimer);

		document.removeEventListener('keydown', handleKeyDown);
	});

	const cursor = cursors[theme];
	$: fullText = text.slice(0, progress) + (cursorVisible ? cursor : '');
</script>

{fullText.padEnd(text.length + cursor.length, ' ')}
