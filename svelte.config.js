import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		appDir: 'app',
		adapter: adapter(),
		target: '#svelte',
	},
};

export default config;
