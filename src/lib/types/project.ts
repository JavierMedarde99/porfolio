export type ProjectCategory = 'Backend' | 'Frontend' | 'Mobile' | 'Full Stack' | 'Documentation';

export interface Project {
	slug: string;
	title: string;
	description: string;
	featured: boolean;
	technologies: string[];
	github: string;
	githubFrontend?: string;
	demo?: string;
	demoFrontend?: string;
	image?: string;
	category?: ProjectCategory;
	descriptionLong?: string;
	architecture?: string;
	decisions?: string[];
	problems?: string[];
	gallery?: string[];
}
