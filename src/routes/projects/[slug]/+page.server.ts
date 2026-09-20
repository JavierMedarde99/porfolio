import { error } from '@sveltejs/kit';
import { getProjectBySlug } from '$lib/data/projects';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const project = getProjectBySlug(params.slug);

	if (!project) {
		throw error(404, `No existe ningún proyecto con slug "${params.slug}".`);
	}

	return { project };
};
