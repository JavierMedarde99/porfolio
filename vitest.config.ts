import { fileURLToPath } from 'node:url';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { svelteTesting } from '@testing-library/svelte/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [svelte(), svelteTesting()],
	test: {
		environment: 'jsdom',
		include: ['src/**/*.{test,spec}.{js,ts}'],
		setupFiles: ['./src/test/setup.ts'],
	},
	resolve: {
		alias: [
			{ find: '$lib', replacement: fileURLToPath(new URL('./src/lib', import.meta.url)) },
			{
				find: '$app/environment',
				replacement: fileURLToPath(new URL('./src/test/mocks/app-environment.ts', import.meta.url)),
			},
			{
				find: '$app/stores',
				replacement: fileURLToPath(new URL('./src/test/mocks/app-stores.ts', import.meta.url)),
			},
		],
	},
});
