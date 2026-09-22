import { fireEvent, render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import ProjectFilter from '$lib/components/projects/ProjectFilter.svelte';

const PROPS = {
	category: 'Todos' as const,
	technologies: [] as string[],
	availableTechnologies: ['Java', 'React'],
};

describe('ProjectFilter', () => {
	it('cambia la categoría marcada al pulsar', async () => {
		render(ProjectFilter, { props: { ...PROPS } });
		const mobile = screen.getByRole('button', { name: 'Mobile' });
		expect(mobile).toHaveAttribute('aria-pressed', 'false');
		await fireEvent.click(mobile);
		expect(mobile).toHaveAttribute('aria-pressed', 'true');
	});

	it('marca tecnologías y muestra limpiar filtros', async () => {
		render(ProjectFilter, { props: { ...PROPS } });
		expect(screen.queryByRole('button', { name: /limpiar filtros/i })).not.toBeInTheDocument();
		await fireEvent.click(screen.getByText('React'));
		expect(screen.getByRole('button', { name: /limpiar filtros/i })).toBeInTheDocument();
		await fireEvent.click(screen.getByRole('button', { name: /limpiar filtros/i }));
		expect(screen.queryByRole('button', { name: /limpiar filtros/i })).not.toBeInTheDocument();
	});
});
