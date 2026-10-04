export const SITE = {
	name: 'Javier Medarde Mata',
	url: 'https://javiermedarde99.github.io',
	description:
		'Portfolio de Javier Medarde Mata: Java, Spring Boot, microservicios y proyectos full stack.',
	locale: 'es_ES',
} as const;

/** Patrón consistente: "{Página} | Javier Medarde Mata". Sin argumento devuelve el título de la home. */
export function pageTitle(page?: string): string {
	if (!page) return `${SITE.name} | Backend & Full Stack Developer`;
	return `${page} | ${SITE.name}`;
}
