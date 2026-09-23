import type { Project } from '$lib/types/project';

// Nota: las demos son servicios externos (Render/Vercel) fuera de nuestro control:
// pueden tardar en arrancar (cold start) o cambiar de URL. Si una demo cae, el
// resto del portfolio sigue funcionando; solo hay que actualizar la URL aquí.
export const projects: Project[] = [
	{
		slug: 'money-manager',
		title: 'Money Manager',
		description:
			'Sistema completo de finanzas personales: API Spring Boot + app React con dashboard, deploy en Render y Vercel.',
		featured: true,
		technologies: [
			'Java',
			'Spring Boot',
			'PostgreSQL',
			'JWT',
			'React',
			'TypeScript',
			'Vite',
			'Tailwind CSS',
			'Zustand',
			'Axios',
		],
		github: 'https://github.com/JavierMedarde99/money-manager',
		githubFrontend: 'https://github.com/JavierMedarde99/money-manager-frontEnd',
		demo: 'https://expense-manager-new.onrender.com/swagger-ui/index.html',
		demoFrontend: 'https://money-manager-front-end-weld.vercel.app',
		category: 'Full Stack',
		descriptionLong:
			'Sistema completo de finanzas personales: backend API REST con Spring Boot (auth JWT stateless, PostgreSQL) y frontend React con dashboard, transacciones, categorías, deudas y perfil de usuario. API desplegada en Render y app en Vercel.',
		architecture:
			'Backend por capas con Spring Boot y JPA sobre PostgreSQL, documentado con OpenAPI. Frontend React 19 + Vite con Zustand para estado, Axios contra la API, React Router y Recharts para gráficos.',
		decisions: [
			'JWT stateless para no guardar sesiones en el servidor.',
			'Zustand en lugar de Redux por simplicidad en un estado de dominio acotado.',
			'Validación con Zod en formularios y auto-logout en 401.',
			'OpenAPI/Swagger para que el frontend consuma la API sin fricción.',
		],
		problems: [
			'API en plan gratuito con arranque en frío: la app muestra estados de carga mientras despierta.',
			'Gestión de secretos (JWT, credenciales de BD) mediante variables de entorno en ambas plataformas.',
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
		title: 'Collection',
		description:
			'Sistema completo para gestionar colecciones (libros, juegos, MTG, cine): API hexagonal + app React, con MongoDB.',
		featured: true,
		technologies: [
			'Java',
			'Spring Boot',
			'MongoDB',
			'Hexagonal Architecture',
			'React',
			'TypeScript',
			'Vite',
			'Tailwind CSS',
		],
		github: 'https://github.com/JavierMedarde99/backend-collection',
		githubFrontend: 'https://github.com/JavierMedarde99/frontend-collection',
		demo: 'https://backend-collection.onrender.com/swagger-ui/index.html',
		demoFrontend: 'https://frontend-collection-eta.vercel.app',
		category: 'Full Stack',
		descriptionLong:
			'Sistema completo para gestionar colecciones personales: libros, videojuegos, juegos de mesa, cartas Magic (incluye mazos Commander) y películas/series. Backend Spring Boot con arquitectura hexagonal sobre MongoDB y frontend React con listados, filtros, detalle y alta con APIs externas (Google Books, RAWG, Scryfall, TMDB).',
		architecture:
			'Backend hexagonal: domain/ (modelos y puertos) ← application/ (servicios) ← infrastructure/ (adaptadores web, persistencia y clientes externos). Frontend React con React Router y llamadas relativas a /api. Cobertura backend con JaCoCo.',
		decisions: [
			'Arquitectura hexagonal para aislar el dominio de los adaptadores externos.',
			'MongoDB por el modelo de datos flexible (cada tipo de colección tiene atributos distintos).',
			'Frontend con URLs relativas /api para no acoplar entornos.',
		],
		problems: [
			'Modelar dominios heterogéneos (libros, mazos Commander, películas) en colecciones Mongo coherentes.',
			'Integración con fuentes externas (Scryfall, BoardGameGeek, TMDB) con formatos dispares.',
		],
	},
	{
		slug: 'wiki-collection',
		title: 'Wiki Collection',
		description:
			'Documentación central del sistema Collection: arquitectura, fases y guías de cada módulo.',
		featured: false,
		technologies: ['Markdown', 'GitHub Wiki'],
		github: 'https://github.com/JavierMedarde99/wiki-collection',
		category: 'Documentation',
		descriptionLong:
			'Repositorio de documentación del sistema Collection: describe la arquitectura (backend Spring Boot + MongoDB, frontend React), las APIs externas integradas y el estado de cada fase (libros, videojuegos, juegos de mesa, Magic, Commander, películas/series).',
		architecture:
			'Wiki en Markdown organizada por módulos, con tabla de fases y enlaces a los repos de backend y frontend.',
		decisions: [
			'Documentar por fases para que cada módulo sea navegable por separado.',
			'GitHub Wiki para editar sin pasar por PRs.',
		],
		problems: ['Mantener la wiki sincronizada con los cambios de backend y frontend.'],
	},
	{
		// Intencional: el propio portfolio se lista como proyecto porque demuestra
		// el stack (SvelteKit, SEO, CI). No destacado para no canibalizar el resto.
		slug: 'portfolio',
		title: 'Portfolio',
		description: 'Este portfolio: SvelteKit 5 + TypeScript + Tailwind CSS con dark mode, SEO y CI.',
		featured: false,
		technologies: ['SvelteKit', 'TypeScript', 'Tailwind CSS'],
		github: 'https://github.com/JavierMedarde99/porfolio',
		category: 'Frontend',
		descriptionLong:
			'Portfolio personal construido con SvelteKit y Svelte 5 (runes), TypeScript estricto y Tailwind CSS 4. Incluye modo oscuro con persistencia, páginas de proyectos con filtros y pipeline de CI.',
		architecture:
			'SvelteKit con renderizado de servidor, datos centralizados en módulos TypeScript y componentes por dominio (layout, home, projects, experience).',
		decisions: [
			'SvelteKit por su simplicidad y rendimiento frente a SPAs clásicas.',
			'Datos (proyectos, experiencia) en TypeScript separados de la presentación.',
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
