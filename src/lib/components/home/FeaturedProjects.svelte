<script lang="ts">
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
	import { getFeaturedProjects } from '$lib/data/projects';

	const featured = getFeaturedProjects().slice(0, 3);
</script>

<section aria-label="Proyectos destacados" class="mx-auto max-w-5xl px-4 py-12">
	<div class="flex items-end justify-between gap-4">
		<h2 class="text-2xl font-bold tracking-tight">Proyectos destacados</h2>
		<a href="/projects" class="shrink-0 text-sm font-medium underline underline-offset-4">
			Ver todos →
		</a>
	</div>
	<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each featured as project (project.slug)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
