import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
import type { Project } from '$lib/types/project';

const baseProject: Project = {
	slug: 'demo',
	title: 'Demo Project',
	description: 'Descripción breve.',
	featured: false,
	technologies: ['Java', 'Spring Boot'],
	github: 'https://github.com/example/demo',
};

describe('ProjectCard', () => {
	it('muestra título, descripción y tecnologías', () => {
		render(ProjectCard, { props: { project: baseProject } });
		expect(screen.getByRole('link', { name: 'Demo Project' })).toHaveAttribute(
			'href',
			'/projects/demo'
		);
		expect(screen.getByText('Descripción breve.')).toBeInTheDocument();
		expect(screen.getByText('Java')).toBeInTheDocument();
		expect(screen.getByText('Spring Boot')).toBeInTheDocument();
	});

	it('el enlace a GitHub apunta al repo', () => {
		render(ProjectCard, { props: { project: baseProject } });
		expect(screen.getByRole('link', { name: /código de demo project en github/i })).toHaveAttribute(
			'href',
			'https://github.com/example/demo'
		);
	});

	it('muestra demo solo si existe', () => {
		const { unmount } = render(ProjectCard, { props: { project: baseProject } });
		expect(screen.queryByRole('link', { name: /demo de/i })).not.toBeInTheDocument();
		unmount();
		render(ProjectCard, { props: { project: { ...baseProject, demo: 'https://demo.example' } } });
		expect(screen.getByRole('link', { name: /demo de/i })).toHaveAttribute(
			'href',
			'https://demo.example'
		);
	});
});
