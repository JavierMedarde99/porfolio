export interface EmailConfig {
	resendApiKey: string;
	toEmail: string;
	fromEmail: string;
}

export interface EmailEnvResult {
	config: EmailConfig | null;
	missing: string[];
}

const DEFAULT_FROM = 'onboarding@resend.com';

/**
 * Valida las variables de email de forma explícita y centralizada.
 * Devuelve la config lista o la lista de variables que faltan (falla rápido
 * antes de intentar enviar, en vez de fallar a medio request).
 */
export function validateEmailEnv(env: Record<string, string | undefined>): EmailEnvResult {
	const missing: string[] = [];
	if (!env.RESEND_API_KEY) missing.push('RESEND_API_KEY');
	if (!env.CONTACT_TO_EMAIL) missing.push('CONTACT_TO_EMAIL');

	if (missing.length > 0) {
		return { config: null, missing };
	}

	return {
		config: {
			resendApiKey: env.RESEND_API_KEY as string,
			toEmail: env.CONTACT_TO_EMAIL as string,
			fromEmail: env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
		},
		missing: [],
	};
}
