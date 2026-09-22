import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import AboutPreview from '$lib/components/home/AboutPreview.svelte';
import TechStack from '$lib/components/home/TechStack.svelte';

describe('AboutPreview', () => {
	it('enlaza a /about', () => {
		render(AboutPreview);
		expect(screen.getByRole('link', { name: /conóceme/i })).toHaveAttribute('href', '/about');
	});
});

describe('TechStack', () => {
	it('agrupa por áreas con tecnologías', () => {
		render(TechStack);
		for (const group of ['Backend', 'Frontend', 'Mobile', 'DevOps']) {
			expect(screen.getByText(group)).toBeInTheDocument();
		}
		expect(screen.getByText('Kubernetes')).toBeInTheDocument();
	});
});
