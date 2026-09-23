import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { validateEmailEnv } from '$lib/server/config';
import { buildSubject } from '$lib/server/email';
import type { Actions } from './$types';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE = 5000;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const nombre = (data.get('nombre') ?? '').toString().trim();
		const email = (data.get('email') ?? '').toString().trim();
		const asunto = (data.get('asunto') ?? '').toString().trim();
		const mensaje = (data.get('mensaje') ?? '').toString().trim();

		const errors: Record<string, string> = {};
		if (nombre.length < 2) errors.nombre = 'Escribe tu nombre (mínimo 2 caracteres).';
		if (!EMAIL_RE.test(email)) errors.email = 'Escribe un email válido.';
		if (asunto.length > 150) errors.asunto = 'El asunto no puede superar 150 caracteres.';
		if (mensaje.length < 10) errors.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
		if (mensaje.length > MAX_MESSAGE)
			errors.mensaje = `El mensaje no puede superar ${MAX_MESSAGE} caracteres.`;

		if (Object.keys(errors).length > 0) {
			return fail(400, { errors, values: { nombre, email, asunto, mensaje } });
		}

		const { config: emailConfig, missing } = validateEmailEnv(env);

		if (!emailConfig) {
			console.warn(`[contact] Email no configurado, faltan: ${missing.join(', ')}`);
			const errors: Record<string, string> = {
				_server:
					'Servicio de email no configurado. Escríbeme directamente y te respondo en 24-48h.',
			};
			return fail(503, {
				errors,
				values: { nombre, email, asunto, mensaje },
			});
		}

		const response = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${emailConfig.resendApiKey}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				from: emailConfig.fromEmail,
				to: [emailConfig.toEmail],
				reply_to: email,
				subject: buildSubject(asunto, nombre),
				text: `Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`,
			}),
		});

		if (!response.ok) {
			const errors: Record<string, string> = {
				_server: 'No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme por email.',
			};
			return fail(502, {
				errors,
				values: { nombre, email, asunto, mensaje },
			});
		}

		return { success: true };
	},
} satisfies Actions;
