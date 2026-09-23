const MAX_SUBJECT_PART = 120;

/**
 * Limpia texto para usarlo en headers de email: sin CR/LF (header injection),
 * sin espacios de más y truncado a longitud segura.
 */
export function sanitizeHeaderPart(value: string): string {
	return value
		.replace(/[\r\n]+/g, ' ')
		.replace(/\s+/g, ' ')
		.trim()
		.slice(0, MAX_SUBJECT_PART);
}

export function buildSubject(asunto: string, nombre: string): string {
	const cleanAsunto = sanitizeHeaderPart(asunto);
	const cleanNombre = sanitizeHeaderPart(nombre);
	return cleanAsunto ? `[Portfolio] ${cleanAsunto}` : `[Portfolio] Mensaje de ${cleanNombre}`;
}
