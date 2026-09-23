import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Footer from '$lib/components/layout/Footer.svelte';

describe('Footer', () => {
	it('muestra sociales, secciones y copyright con año actual', () => {
		render(Footer);
		expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
			'href',
			expect.stringContaining('github.com')
		);
		expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
			'href',
			expect.stringContaining('linkedin.com')
		);
		expect(
			screen.getByText(new Date().getFullYear().toString(), { exact: false })
		).toBeInTheDocument();
	});

	it('muestra email directo de contacto', () => {
		render(Footer);
		expect(screen.getByRole('link', { name: 'javiermedmata@gmail.com' })).toHaveAttribute(
			'href',
			'mailto:javiermedmata@gmail.com'
		);
	});

	it('enlaza a las 4 secciones', () => {
		render(Footer);
		for (const href of ['/', '/about', '/projects', '/experience']) {
			const links = screen
				.getAllByRole('link')
				.filter((link) => link.getAttribute('href') === href);
			expect(links.length).toBeGreaterThan(0);
		}
	});
});
