import { describe, expect, it } from 'vitest';
import { buildSubject, sanitizeHeaderPart } from '$lib/server/email';

describe('sanitizeHeaderPart', () => {
	it('elimina CR/LF para evitar header injection', () => {
		expect(sanitizeHeaderPart('hola\nBcc: evil@x.com')).toBe('hola Bcc: evil@x.com');
		expect(sanitizeHeaderPart('a\r\nb')).toBe('a b');
	});

	it('colapsa espacios y trunca a 120', () => {
		expect(sanitizeHeaderPart('  hola   mundo  ')).toBe('hola mundo');
		expect(sanitizeHeaderPart('x'.repeat(200)).length).toBe(120);
	});
});

describe('buildSubject', () => {
	it('usa el asunto si existe, si no el nombre', () => {
		expect(buildSubject('Trabajo', 'Ana')).toBe('[Portfolio] Trabajo');
		expect(buildSubject('', 'Ana')).toBe('[Portfolio] Mensaje de Ana');
	});

	it('nunca deja saltos de línea en el subject', () => {
		expect(buildSubject('a\nb', 'c\nd')).not.toMatch(/[\r\n]/);
	});
});
