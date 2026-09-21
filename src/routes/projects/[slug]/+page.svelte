<script lang="ts">
	import { pageTitle } from '$lib/utils/seo';
	import SocialMeta from '$lib/components/seo/SocialMeta.svelte';
	import TechBadge from '$lib/components/projects/TechBadge.svelte';
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();
	const project = $derived(data.project);
</script>

<svelte:head>
	<title>{pageTitle(project.title)}</title>
	<meta name="description" content={project.description} />
	<link rel="canonical" href={`https://javiermedarde99.github.io/projects/${project.slug}`} />
</svelte:head>

<SocialMeta
	title={`${project.title} | Javi Med`}
	description={project.description}
	path={`/projects/${project.slug}`}
/>

<main class="mx-auto max-w-4xl px-4 py-12">
	<a href="/projects" class="text-sm underline opacity-70 transition-opacity hover:opacity-100">
		← Volver a proyectos
	</a>

	<h1 class="mt-4 text-4xl font-bold tracking-tight">{project.title}</h1>
	<p class="mt-2 text-lg opacity-80">{project.description}</p>

	<ul aria-label="Tecnologías" class="mt-4 flex flex-wrap gap-2">
		{#each project.technologies as tech (tech)}
			<li><TechBadge technology={tech} /></li>
		{/each}
	</ul>

	{#if project.image}
		<img
			src={project.image}
			alt={`Captura de ${project.title}`}
			loading="lazy"
			class="mt-8 w-full rounded-xl border border-zinc-200 dark:border-zinc-800"
		/>
	{/if}

	{#if project.descriptionLong}
		<section aria-label="Descripción" class="mt-8">
			<h2 class="text-2xl font-bold">Descripción</h2>
			<p class="mt-2 opacity-90">{project.descriptionLong}</p>
		</section>
	{/if}

	{#if project.architecture}
		<section aria-label="Arquitectura" class="mt-8">
			<h2 class="text-2xl font-bold">Arquitectura</h2>
			<p class="mt-2 opacity-90">{project.architecture}</p>
		</section>
	{/if}

	{#if project.decisions?.length}
		<section aria-label="Decisiones técnicas" class="mt-8">
			<h2 class="text-2xl font-bold">Decisiones técnicas</h2>
			<ul class="mt-2 flex list-disc flex-col gap-1 pl-5 opacity-90">
				{#each project.decisions as decision (decision)}
					<li>{decision}</li>
				{/each}
			</ul>
		</section>
	{/if}

	{#if project.problems?.length}
		<section aria-label="Problemas resueltos" class="mt-8">
			<h2 class="text-2xl font-bold">Problemas que resolví</h2>
			<ul class="mt-2 flex list-disc flex-col gap-1 pl-5 opacity-90">
				{#each project.problems as problem (problem)}
					<li>{problem}</li>
				{/each}
			</ul>
		</section>
	{/if}

	{#if project.gallery?.length}
		<section aria-label="Galería" class="mt-8">
			<h2 class="text-2xl font-bold">Galería</h2>
			<div class="mt-4 grid gap-4 sm:grid-cols-2">
				{#each project.gallery as src (src)}
					<img
						{src}
						alt={`Imagen de ${project.title}`}
						loading="lazy"
						class="w-full rounded-xl border border-zinc-200 dark:border-zinc-800"
					/>
				{/each}
			</div>
		</section>
	{/if}

	<div class="mt-10 flex flex-wrap gap-3">
		<a
			href={project.github}
			target="_blank"
			rel="noreferrer"
			class="rounded-md border border-zinc-300 px-4 py-2 font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
		>
			Ver en GitHub
		</a>
		{#if project.demo}
			<a
				href={project.demo}
				target="_blank"
				rel="noreferrer"
				class="rounded-md bg-zinc-900 px-4 py-2 font-medium text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-zinc-900"
			>
				Ver demo
			</a>
		{/if}
	</div>
</main>
