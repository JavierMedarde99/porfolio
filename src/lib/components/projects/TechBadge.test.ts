import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import TechBadge from '$lib/components/projects/TechBadge.svelte';

describe('TechBadge', () => {
	it('muestra la tecnología', () => {
		render(TechBadge, { props: { technology: 'SvelteKit' } });
		expect(screen.getByText('SvelteKit')).toBeInTheDocument();
	});
});
