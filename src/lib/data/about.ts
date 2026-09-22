export interface GroupProject {
	slug: string;
	label: string;
}

export interface WorkStep {
	step: string;
	title: string;
	text: string;
}

export const GROUP_PROJECTS: Record<string, GroupProject> = {
	Backend: { slug: 'money-manager', label: 'Ver en Money Manager' },
	Frontend: { slug: 'portfolio', label: 'Ver en Portfolio' },
	Mobile: { slug: 'f1-bet', label: 'Ver en F1-Bet' },
	DevOps: { slug: 'collection-backend', label: 'Ver en Collection' },
};

export const WORK_METHOD: WorkStep[] = [
	{ step: '01', title: 'Analizar', text: 'Entiendo el problema y los requisitos antes de escribir código.' },
	{ step: '02', title: 'Diseñar', text: 'Defino la arquitectura y los contratos de la API.' },
	{ step: '03', title: 'Implementar', text: 'Código limpio, tipado y commits pequeños.' },
	{ step: '04', title: 'Testear', text: 'Verifico cada cambio antes de integrarlo.' },
	{ step: '05', title: 'Mejorar', text: 'Refactor y rendimiento en cada iteración.' },
];
