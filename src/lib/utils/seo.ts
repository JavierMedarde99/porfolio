export const SITE = {
	name: 'Javi Med',
	url: 'https://javiermedarde99.github.io',
	description: 'Portfolio de Javi Med: Java, Spring Boot, microservicios y proyectos full stack.',
	locale: 'es_ES',
} as const;

/** Patrón consistente: "{Página} | Javi Med". Sin argumento devuelve el título de la home. */
export function pageTitle(page?: string): string {
	if (!page) return `${SITE.name} | Backend & Full Stack Developer`;
	return `${page} | ${SITE.name}`;
}
