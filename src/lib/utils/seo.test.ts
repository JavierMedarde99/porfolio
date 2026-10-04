import { describe, expect, it } from 'vitest';
import { SITE, pageTitle } from '$lib/utils/seo';

describe('seo utils', () => {
	it('pageTitle sigue el patrón consistente', () => {
		expect(pageTitle()).toBe('Javier Medarde Mata | Backend & Full Stack Developer');
		expect(pageTitle('About')).toBe('About | Javier Medarde Mata');
	});

	it('SITE tiene URL y locale', () => {
		expect(SITE.url).toMatch(/^https:\/\//);
		expect(SITE.locale).toBe('es_ES');
	});
});
