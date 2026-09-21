import { readable } from 'svelte/store';

export const page = readable({ url: { pathname: '/' } });
export const navigating = readable(null);
export const updated = {
	subscribe: readable(false).subscribe,
	check: async (): Promise<boolean> => false,
};
