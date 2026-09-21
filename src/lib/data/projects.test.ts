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

	it('money-manager es Full Stack con ambos repos y demos', () => {
		const project = getProjectBySlug('money-manager');
		expect(project?.category).toBe('Full Stack');
		expect(project?.githubFrontend).toBe(
			'https://github.com/JavierMedarde99/money-manager-frontEnd'
		);
		expect(project?.demoFrontend).toBe('https://money-manager-front-end-weld.vercel.app');
		expect(project?.demo).toBe('https://expense-manager-new.onrender.com/swagger-ui/index.html');
		expect(project?.technologies).toEqual(
			expect.arrayContaining(['React', 'TypeScript', 'Spring Boot'])
		);
	});

	it('collection-backend es Full Stack con ambos repos', () => {
		const project = getProjectBySlug('collection-backend');
		expect(project?.category).toBe('Full Stack');
		expect(project?.githubFrontend).toBe('https://github.com/JavierMedarde99/frontend-collection');
		expect(project?.demoFrontend).toBe('https://frontend-collection-eta.vercel.app');
		expect(project?.demo).toBe('https://backend-collection.onrender.com/swagger-ui/index.html');
	});

	it('wiki-collection es Documentation sin demo', () => {
		const project = getProjectBySlug('wiki-collection');
		expect(project?.category).toBe('Documentation');
		expect(project?.demo).toBeUndefined();
		expect(project?.technologies).toEqual(expect.arrayContaining(['Markdown']));
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

	it('filterByCategory agrupa Full Stack y Documentation', () => {
		expect(
			filterByCategory('Full Stack')
				.map((project) => project.slug)
				.sort()
		).toEqual(['collection-backend', 'money-manager']);
		expect(filterByCategory('Documentation').map((project) => project.slug)).toEqual([
			'wiki-collection',
		]);
	});

	it('filterByTechnology encuentra stack frontend', () => {
		expect(
			filterByTechnology('React')
				.map((project) => project.slug)
				.sort()
		).toEqual(['collection-backend', 'money-manager']);
	});
});
