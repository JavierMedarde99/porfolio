<script module lang="ts">
	import { projects } from '$lib/data/projects';

	// projects es estático: se calcula una vez, no en cada render
	export const availableTechnologies = [
		...new Set(projects.flatMap((project) => project.technologies)),
	].sort();
</script>

<script lang="ts">
	import SocialMeta from '$lib/components/seo/SocialMeta.svelte';
	import { pageTitle, SITE } from '$lib/utils/seo';
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
	import ProjectFilter from '$lib/components/projects/ProjectFilter.svelte';
	import type { CategoryFilter } from '$lib/components/projects/ProjectFilter.svelte';

	let category = $state<CategoryFilter>('Todos');
	let selectedTechnologies = $state<string[]>([]);

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
	<title>{pageTitle('Proyectos')}</title>
	<meta
		name="description"
		content="Proyectos de Javier Medarde Mata: backend con Spring Boot, apps móviles con Flutter y frontend con SvelteKit."
	/>
	<link rel="canonical" href={SITE.url + '/projects'} />
</svelte:head>
<SocialMeta
	title="Proyectos | Javier Medarde Mata"
	description="Proyectos de Javier Medarde Mata: backend con Spring Boot, apps móviles con Flutter y frontend con SvelteKit."
	path="/projects"
/>

<main class="mx-auto max-w-6xl px-4 py-16 md:py-20">
	<p class="font-mono text-sm uppercase tracking-widest text-accent">// 03 — proyectos</p>
	<h1 class="mt-2 font-display text-5xl font-bold tracking-tight md:text-6xl">Proyectos</h1>
	<p class="mt-3 max-w-2xl text-lg text-muted">
		Filtra por categoría o tecnología. Cada tarjeta enlaza al código y, cuando existe, a la demo
		desplegada.
	</p>

	<div class="mt-10">
		<ProjectFilter bind:category bind:technologies={selectedTechnologies} {availableTechnologies} />
	</div>

	{#if filtered.length === 0}
		<p
			role="status"
			class="mt-10 border border-dashed border-line-strong p-10 text-center font-mono text-sm text-muted"
		>
			Ningún proyecto coincide con esos filtros. Prueba a limpiarlos.
		</p>
	{:else}
		<p role="status" class="mt-8 font-mono text-sm text-muted">
			{filtered.length} de {projects.length} proyectos
		</p>
		<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each filtered as project, i (project.slug)}
				<ProjectCard {project} index={i + 1} />
			{/each}
		</div>
	{/if}
</main>
