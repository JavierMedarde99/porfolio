import { describe, expect, it } from 'vitest';
import {
	filterByCategory,
	filterByTechnology,
	getFeaturedProjects,
	getProjectBySlug,
	projects,
} from '$lib/data/projects';

describe('projects data', () => {
	it('expone proyectos con slugs únicos', () => {
		const slugs = projects.map((project) => project.slug);
		expect(new Set(slugs).size).toBe(slugs.length);
		expect(slugs.length).toBeGreaterThan(0);
	});

	it('getProjectBySlug devuelve el proyecto o undefined', () => {
		expect(getProjectBySlug('money-manager')?.title).toBe('Money Manager');
		expect(getProjectBySlug('no-existe')).toBeUndefined();
	});

	it('getFeaturedProjects solo devuelve destacados', () => {
		const featured = getFeaturedProjects();
		expect(featured.length).toBeGreaterThan(0);
		expect(featured.every((project) => project.featured)).toBe(true);
	});

	it('filterByTechnology ignora mayúsculas', () => {
		expect(filterByTechnology('java').length).toBe(filterByTechnology('Java').length);
		expect(filterByTechnology('cobol')).toEqual([]);
	});

	it('filterByCategory filtra exacto', () => {
		expect(filterByCategory('Mobile').map((project) => project.slug)).toEqual(['f1-bet']);
		expect(filterByCategory('Todas')).toEqual([]);
	});
});
