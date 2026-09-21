import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Navbar from '$lib/components/layout/Navbar.svelte';

describe('Navbar', () => {
	it('muestra logo y los 5 links con rutas correctas', () => {
		render(Navbar);
		expect(screen.getByRole('link', { name: /javi med/i })).toHaveAttribute('href', '/');
		for (const [label, href] of [
			['Home', '/'],
			['About', '/about'],
			['Projects', '/projects'],
			['Experience', '/experience'],
			['Contact', '/contact'],
		] as const) {
			expect(screen.getByRole('link', { name: label })).toHaveAttribute('href', href);
		}
	});

	it('tiene toggle de tema y botón de menú móvil', () => {
		render(Navbar);
		expect(
			screen.getByRole('button', { name: /cambiar a modo (claro|oscuro)/i })
		).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Abrir menú' })).toHaveAttribute(
			'aria-expanded',
			'false'
		);
	});
});
