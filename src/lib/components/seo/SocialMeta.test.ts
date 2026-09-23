import { render } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import SocialMeta from '$lib/components/seo/SocialMeta.svelte';

function headContent(selector: string): string | null | undefined {
	return document.head.querySelector(selector)?.getAttribute('content');
}

describe('SocialMeta', () => {
	it('emite OG y Twitter con la imagen por defecto', () => {
		render(SocialMeta, {
			props: { title: 'Test | Javi Med', description: 'Descripción test', path: '/test' },
		});
		expect(headContent('meta[property="og:title"]')).toBe('Test | Javi Med');
		expect(headContent('meta[property="og:description"]')).toBe('Descripción test');
		expect(headContent('meta[property="og:url"]')).toBe('https://javiermedarde99.github.io/test');
		expect(headContent('meta[property="og:image"]')).toContain('social-share.png');
		expect(headContent('meta[name="twitter:title"]')).toBe('Test | Javi Med');
	});

	it('permite imagen custom', () => {
		render(SocialMeta, {
			props: {
				title: 'T',
				description: 'D',
				path: '/',
				image: 'https://example.com/img.png',
			},
		});
		expect(headContent('meta[property="og:image"]')).toBe('https://example.com/img.png');
	});
});
