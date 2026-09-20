import type { Project } from '$lib/types/project';

export const projects: Project[] = [
	{
		slug: 'money-manager',
		title: 'Money Manager',
		description:
			'API REST de finanzas personales con Spring Boot, auth JWT y PostgreSQL. Desplegada en Render con Swagger UI.',
		featured: true,
		technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'JWT', 'Spring Security', 'OpenAPI'],
		github: 'https://github.com/JavierMedarde99/money-manager',
		demo: 'https://expense-manager-new.onrender.com',
		category: 'Backend',
		descriptionLong:
			'API REST para gestión de finanzas personales: registro de gastos e ingresos con autenticación stateless mediante JWT (HS256) y contraseñas con BCrypt. Documentada con springdoc-openapi y desplegada en Render sobre PostgreSQL.',
		architecture:
			'API REST por capas con Spring Boot: controladores, servicios y persistencia JPA sobre PostgreSQL. Seguridad con filter chain de Spring Security y documentación OpenAPI generada.',
		decisions: [
			'JWT stateless para no guardar sesiones en el servidor.',
			'PostgreSQL como base relacional para datos financieros consistentes.',
			'OpenAPI/Swagger para que el frontend y terceros consuman la API sin fricción.',
		],
		problems: [
			'Despliegues gratuitos con arranque en frío: documentado en el README con la URL de Swagger para verificar el estado.',
			'Gestión de secretos (JWT, credenciales de BD) mediante variables de entorno.',
		],
	},
	{
		slug: 'f1-bet',
		title: 'F1-Bet',
		description:
			'App móvil Flutter para apostar entre amigos las posiciones de Alonso y Sainz, con Supabase y datos de OpenF1.',
		featured: true,
		technologies: ['Flutter', 'Dart', 'Supabase', 'OpenF1 API'],
		github: 'https://github.com/JavierMedarde99/F1-bet',
		category: 'Mobile',
		descriptionLong:
			'Aplicación móvil hecha en Flutter para apostar entre amigos por las posiciones finales de Fernando Alonso y Carlos Sainz en cada Gran Premio. Login contra Supabase, calendario de carreras desde la API de OpenF1 y clasificación automática comparando apuestas con resultados reales.',
		architecture:
			'Cliente Flutter con autenticación y persistencia en Supabase (tabla users_f1 y apuestas). Fuente externa OpenF1 para calendario y resultados de carreras.',
		decisions: [
			'Supabase para auth y base de datos sin montar backend propio.',
			'OpenF1 como fuente oficial de datos de carreras en lugar de scrapear.',
			'Ventana de apuesta hasta el inicio de carrera para evitar trampas.',
		],
		problems: [
			'Carreras futuras vs finalizadas: estados distintos (Apostar / Resultados / deshabilitado) según la fecha.',
			'Cálculo de la clasificación por menor diferencia total entre posiciones apostadas y reales.',
		],
	},
	{
		slug: 'collection-backend',
		title: 'Collection Backend',
		description:
			'Backend Spring Boot con arquitectura hexagonal para gestionar colecciones (libros, juegos, cartas MTG), con MongoDB y OpenAPI.',
		featured: true,
		technologies: ['Java', 'Spring Boot', 'MongoDB', 'Hexagonal Architecture', 'OpenAPI'],
		github: 'https://github.com/JavierMedarde99/backend-collection',
		category: 'Backend',
		descriptionLong:
			'Backend Spring Boot para gestionar colecciones personales: libros, videojuegos, juegos de mesa, cartas Magic (incluye mazos Commander) y películas/series. Expone una API REST documentada con OpenAPI y persiste en MongoDB.',
		architecture:
			'Arquitectura hexagonal: domain/ (modelos y puertos) ← application/ (servicios) ← infrastructure/ (adaptadores web, persistencia y clientes externos). Cobertura con JaCoCo.',
		decisions: [
			'Arquitectura hexagonal para aislar el dominio de los adaptadores externos.',
			'MongoDB por el modelo de datos flexible (cada tipo de colección tiene atributos distintos).',
			'Lombok para reducir boilerplate en los modelos.',
		],
		problems: [
			'Modelar dominios heterogéneos (libros, mazos Commander, películas) en colecciones Mongo coherentes.',
			'Integración con fuentes externas para enriquecer los datos de cada colección.',
		],
	},
	{
		slug: 'portfolio',
		title: 'Portfolio',
		description: 'Este portfolio: SvelteKit 5 + TypeScript + Tailwind CSS con dark mode, SEO y CI.',
		featured: false,
		technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS'],
		github: 'https://github.com/JavierMedarde99/porfolio',
		category: 'Frontend',
		descriptionLong:
			'Portfolio personal construido con SvelteKit y Svelte 5 (runes), TypeScript estricto y Tailwind CSS 4. Incluye modo oscuro con persistencia, páginas de proyectos con filtros, formulario de contacto con server actions y pipeline de CI.',
		architecture:
			'SvelteKit con renderizado de servidor, datos centralizados en módulos TypeScript y componentes por dominio (layout, home, projects, experience, contact).',
		decisions: [
			'SvelteKit por su simplicidad y rendimiento frente a SPAs clásicas.',
			'Datos (proyectos, experiencia) en TypeScript separados de la presentación.',
			'Server actions para el contacto sin exponer credenciales en el cliente.',
		],
		problems: [
			'Compatibilidad de versiones entre SvelteKit, Vite y el plugin de Svelte al fijar dependencias.',
			'Tema oscuro sin flash de contenido: script pre-hidratación en app.html.',
		],
	},
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
	return projects.filter((project) => project.featured);
}

export function filterByTechnology(tech: string): Project[] {
	const needle = tech.toLowerCase();
	return projects.filter((project) =>
		project.technologies.some((item) => item.toLowerCase() === needle)
	);
}

export function filterByCategory(category: string): Project[] {
	return projects.filter((project) => project.category === category);
}
