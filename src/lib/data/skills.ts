export interface SkillGroup {
	title: string;
	items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
	{
		title: 'Backend',
		items: [
			'Java',
			'Spring Boot',
			'Kotlin',
			'REST APIs',
			'JWT',
			'PostgreSQL',
			'MySQL',
			'RabbitMQ',
			'Kafka',
		],
	},
	{
		title: 'Frontend',
		items: ['TypeScript', 'Svelte', 'React', 'HTML/CSS'],
	},
	{
		title: 'Mobile',
		items: ['Flutter', 'Dart', 'Supabase'],
	},
	{
		title: 'DevOps',
		items: ['Docker', 'Kubernetes', 'Git', 'GitHub', 'AWS', 'CI/CD'],
	},
];

export const HERO_TECHS = ['Java', 'Spring Boot', 'TypeScript', 'Svelte', 'Flutter', 'Docker'];
