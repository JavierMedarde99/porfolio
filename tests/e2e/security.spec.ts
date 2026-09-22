import { expect, test } from '@playwright/test';

/**
 * SvelteKit protege los form actions con check de Origin (403 ante POST
 * cross-site). Este spec fija ese comportamiento: un atacante no puede
 * enviar el formulario de contacto desde otro origen.
 */
test('POST cross-origin al action de contacto es rechazado (403)', async ({ request }) => {
	const response = await request.post('/contact', {
		headers: { origin: 'https://evil.example.com' },
		form: { nombre: 'Atacante', email: 'a@evil.com', mensaje: 'Mensaje suficientemente largo' },
	});
	expect(response.status()).toBe(403);
});

test('POST same-origin llega al action (no lo bloquea el CSRF)', async ({ request }) => {
	const response = await request.post('/contact', {
		headers: { origin: 'http://localhost:4173' },
		form: {
			nombre: 'Test',
			email: 'test@test.com',
			mensaje: 'Mensaje de prueba suficientemente largo',
		},
	});
	// Sin claves de Resend en CI: el action responde 503, pero pasa el filtro CSRF
	expect([200, 400, 502, 503]).toContain(response.status());
});
