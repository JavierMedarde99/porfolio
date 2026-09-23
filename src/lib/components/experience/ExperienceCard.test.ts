import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import ExperienceCard from '$lib/components/experience/ExperienceCard.svelte';

describe('ExperienceCard', () => {
	it('muestra rol, empresa, periodo y tecnologías', () => {
		render(ExperienceCard, {
			props: {
				experience: {
					role: 'Dev',
					company: 'Acme',
					period: '2024',
					description: ['Hizo cosas.'],
					technologies: ['Java'],
				},
			},
		});
		expect(screen.getByText('Dev')).toBeInTheDocument();
		expect(screen.getByText('Acme')).toBeInTheDocument();
		expect(screen.getByText('2024')).toBeInTheDocument();
		expect(screen.getByText('Hizo cosas.')).toBeInTheDocument();
		expect(screen.getByText('Java')).toBeInTheDocument();
	});
});
