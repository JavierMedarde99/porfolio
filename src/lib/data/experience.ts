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

export const EXPERIENCES: Experience[] = [
	{
		role: 'Java Developer Senior',
		company: 'IDB-mobile',
		period: 'ago 2026 — actualidad',
		description: [
			'Desarrollo de APIs BFF para la conexión de datos con el frontend.',
			'Desarrollo con agentes e IA para aumentar la productividad del equipo.'
		],
		technologies: [
			'Java',
			'Spring Boot',
			'Hexagonal Architecture',
			'RabbitMQ',
			'Apache Kafka',
			'Docker',
			'PostgreSQL'
		]
	},
	{
		role: 'Java Developer Junior/Mid',
		company: 'IDB-mobile',
		period: 'mar 2022 — may 2026',
		description: [
			'Desarrollo y mantenimiento de un sistema de pago móvil con pasarelas de pago, integrando microservicios con comunicación asíncrona (RabbitMQ, Apache Kafka).',
			'Arquitectura MVC con Spring Boot y Thymeleaf, gestionando el ciclo completo de petición en el backend.',
			'Despliegue de servicios con Docker y Kubernetes, con pipelines automatizados.',
			'Integración con AWS y AWS Lambda, APIs REST/SOAP e informes con JasperReports.'
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
			'MySQL'
		]
	}
];

export const EDUCATION: Education[] = [
	{
		title: 'CFGS Desarrollo de Aplicaciones Web (DAW)',
		period: '2020 — 2022',
		school: 'I.E.S. Mar de Alborán · Estepona'
	},
	{
		title: 'Bachillerato de Ciencias Sociales',
		period: '2018 — 2020',
		school: 'I.E.S. Río Verde · Marbella'
	}
];
