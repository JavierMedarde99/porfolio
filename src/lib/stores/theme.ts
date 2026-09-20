import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

function getInitialTheme(): Theme {
	if (!browser) return 'light';
	const stored = localStorage.getItem(STORAGE_KEY);
	if (stored === 'light' || stored === 'dark') return stored;
	return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme: Theme): void {
	if (!browser) return;
	document.documentElement.classList.toggle('dark', theme === 'dark');
	document.documentElement.style.colorScheme = theme;
	localStorage.setItem(STORAGE_KEY, theme);
}

export const theme = writable<Theme>(getInitialTheme());

/** Sync the store with the class set by the pre-hydration script in app.html. */
export function initTheme(): void {
	if (!browser) return;
	theme.set(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
}

export function toggleTheme(): void {
	theme.update((current) => {
		const next: Theme = current === 'dark' ? 'light' : 'dark';
		applyTheme(next);
		return next;
	});
}
