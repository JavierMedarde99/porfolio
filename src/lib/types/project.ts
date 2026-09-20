export type ProjectCategory = 'Backend' | 'Frontend' | 'Mobile' | 'Full Stack';

export interface Project {
	slug: string;
	title: string;
	description: string;
	featured: boolean;
	technologies: string[];
	github: string;
	demo?: string;
	image?: string;
	category?: ProjectCategory;
	descriptionLong?: string;
	architecture?: string;
	decisions?: string[];
	problems?: string[];
	gallery?: string[];
}
