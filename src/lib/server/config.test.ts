import { describe, expect, it } from 'vitest';
import { validateEmailEnv } from '$lib/server/config';

describe('validateEmailEnv', () => {
	it('devuelve config cuando todo está presente', () => {
		const result = validateEmailEnv({
			RESEND_API_KEY: 'key',
			CONTACT_TO_EMAIL: 'a@b.com',
			CONTACT_FROM_EMAIL: 'from@x.com',
		});
		expect(result.missing).toEqual([]);
		expect(result.config).toEqual({
			resendApiKey: 'key',
			toEmail: 'a@b.com',
			fromEmail: 'from@x.com',
		});
	});

	it('usa from por defecto y lista lo que falta', () => {
		const result = validateEmailEnv({ RESEND_API_KEY: 'key' });
		expect(result.config).toBeNull();
		expect(result.missing).toEqual(['CONTACT_TO_EMAIL']);

		const full = validateEmailEnv({ RESEND_API_KEY: 'key', CONTACT_TO_EMAIL: 'a@b.com' });
		expect(full.config?.fromEmail).toBe('onboarding@resend.com');
	});
});
