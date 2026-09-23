export interface Experience {
	role: string;
	company: string;
	period: string;
	description: string[];
	technologies: string[];
}

export interface Education {
	title: string;
	period: string;
	school: string;
	description?: string;
}

export interface CourseItem {
	title: string;
	credentialUrl?: string;
}

export interface Course {
	title: string;
	platform: string;
	credentialUrl?: string;
	items?: CourseItem[];
}

const drive = (id: string): string => `https://drive.google.com/file/d/${id}/view?usp=sharing`;

export const COURSES: Course[] = [
	{
		title: 'Spring Test',
		platform: 'Udemy',
		credentialUrl: drive('1HAuGXAN3x-3hqFor722IntGpYwsZGe-u'),
	},
	{
		title: 'SOLID Principles',
		platform: 'Udemy',
		credentialUrl: drive('1akuOijmkQlijLKlsMUr9DELvFwcjIMbM'),
	},
	{
		title: 'MongoDB',
		platform: 'Platzi',
		credentialUrl: drive('1GyViCy7Men4pjPIcCSHMgZqeniozjHOR'),
	},
	{ title: 'React', platform: 'Platzi', credentialUrl: drive('1cPOp3So9ji4ezOWsMpI0BIbG58UaR6Al') },
	{
		title: 'MariaDB',
		platform: 'Udemy',
		credentialUrl: drive('13TzQ2PVrYzq2us4_io8Ku75ytO-frnSl'),
	},
	{ title: 'Python', platform: 'Udemy', credentialUrl: drive('1stP1vanF-2yPUr-QNSQWKdx-l-zfLlCj') },
	{
		title: 'Pack IA',
		platform: 'Datacamp',
		items: [
			{ title: 'AI for Work', credentialUrl: drive('1c412FtiRvSe_FvbOXohqSs0d9isOKhgn') },
			{ title: 'LLM Concepts', credentialUrl: drive('1vnexAmkcdcdWHavvTGOsURHFxjBbNxo0') },
			{ title: 'Machine Learning', credentialUrl: drive('1GeYwadT6rEfXosM_-Ph_SOqXkZqOSnbm') },
		],
	},
];

export const EXPERIENCES: Experience[] = [
	{
		role: 'Java Developer Senior',
		company: 'IDB-mobile',
		period: 'agosto 2026 — actualidad',
		description: [
			'Desarrollo de APIs BFF para la conexión de datos con el frontend.',
			'Desarrollo con agentes e IA para aumentar la productividad del equipo.',
		],
		technologies: [
			'Java',
			'Spring Boot',
			'Hexagonal Architecture',
			'RabbitMQ',
			'Apache Kafka',
			'Docker',
			'PostgreSQL',
		],
	},
	{
		role: 'Java Developer Junior/Mid',
		company: 'IDB-mobile',
		period: 'marzo 2022 — mayo 2026',
		description: [
			'Desarrollo y mantenimiento de un sistema de pago móvil con pasarelas de pago, integrando microservicios con comunicación asíncrona (RabbitMQ, Apache Kafka).',
			'Arquitectura MVC con Spring Boot y Thymeleaf, gestionando el ciclo completo de petición en el backend.',
			'Despliegue de servicios con Docker y Kubernetes, con pipelines automatizados.',
			'Integración con AWS y AWS Lambda, APIs REST/SOAP e informes con JasperReports.',
		],
		technologies: [
			'Java',
			'Spring Boot',
			'Kotlin',
			'Thymeleaf',
			'Microservicios',
			'RabbitMQ',
			'Apache Kafka',
			'Docker',
			'Kubernetes',
			'AWS',
			'MySQL',
		],
	},
];

export const EDUCATION: Education[] = [
	{
		title: 'CFGS Desarrollo de Aplicaciones Web (DAW)',
		period: '2020 — 2022',
		school: 'I.E.S. Mar de Alborán · Estepona',
	},
	{
		title: 'Bachillerato de Ciencias Sociales',
		period: '2018 — 2020',
		school: 'I.E.S. Río Verde · Marbella',
	},
];
