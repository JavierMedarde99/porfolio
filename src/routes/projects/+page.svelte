<script lang="ts">
	import { SITE } from '$lib/utils/seo';
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
	import ProjectFilter from '$lib/components/projects/ProjectFilter.svelte';
	import type { CategoryFilter } from '$lib/components/projects/ProjectFilter.svelte';
	import { projects } from '$lib/data/projects';

	let category = $state<CategoryFilter>('Todos');
	let selectedTechnologies = $state<string[]>([]);

	const availableTechnologies = $derived(
		[...new Set(projects.flatMap((project) => project.technologies))].sort()
	);

	const filtered = $derived(
		projects
			.filter((project) => category === 'Todos' || project.category === category)
			.filter(
				(project) =>
					selectedTechnologies.length === 0 ||
					selectedTechnologies.some((tech) => project.technologies.includes(tech))
			)
			.sort((a, b) => Number(b.featured) - Number(a.featured))
	);
</script>

<svelte:head>
	<title>Proyectos | Javi Med</title>
	<meta
		name="description"
		content="Proyectos de Javi Med: backend con Spring Boot, apps móviles con Flutter y frontend con SvelteKit."
	/>
	<link rel="canonical" href={SITE.url + '/projects'} />
</svelte:head>

<main class="mx-auto max-w-5xl px-4 py-12">
	<h1 class="text-3xl font-bold tracking-tight">Proyectos</h1>
	<p class="mt-2 opacity-80">Filtra por categoría o tecnología.</p>

	<div class="mt-8">
		<ProjectFilter bind:category bind:technologies={selectedTechnologies} {availableTechnologies} />
	</div>

	{#if filtered.length === 0}
		<p
			role="status"
			class="mt-10 rounded-xl border border-dashed border-zinc-300 p-8 text-center opacity-70 dark:border-zinc-700"
		>
			Ningún proyecto coincide con esos filtros. Prueba a limpiarlos.
		</p>
	{:else}
		<p role="status" class="mt-6 text-sm opacity-60">
			{filtered.length} de {projects.length} proyectos
		</p>
		<div class="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each filtered as project (project.slug)}
				<ProjectCard {project} />
			{/each}
		</div>
	{/if}
</main>
