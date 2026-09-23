import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Hero from '$lib/components/home/Hero.svelte';

describe('Hero', () => {
	it('muestra identidad y CTAs con rutas correctas', () => {
		render(Hero);
		expect(screen.getByRole('heading', { name: 'Javi Med', level: 1 })).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Ver proyectos' })).toHaveAttribute(
			'href',
			'/projects'
		);
		expect(screen.getByRole('link', { name: 'Contactar' })).toHaveAttribute(
			'href',
			'mailto:javiermedmata@gmail.com'
		);
	});

	it('lista tecnologías destacadas', () => {
		render(Hero);
		for (const tech of ['Java', 'Spring Boot', 'Docker']) {
			expect(screen.getByText(tech)).toBeInTheDocument();
		}
	});
});
