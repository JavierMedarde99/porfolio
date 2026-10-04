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
	title={`${project.title} | Javier Medarde Mata`}
	description={project.description}
	path={`/projects/${project.slug}`}
/>

<main class="mx-auto max-w-4xl px-4 py-16 md:py-20">
	<a
		href="/projects"
		class="group inline-flex items-center gap-1.5 font-mono text-sm text-muted transition-colors hover:text-accent"
	>
		<span aria-hidden="true" class="transition-transform group-hover:-translate-x-0.5">←</span>
		Volver a proyectos
	</a>

	<h1 class="mt-6 font-display text-5xl font-bold tracking-tight md:text-6xl">
		{project.title}
	</h1>
	<p class="mt-3 text-lg text-muted">{project.description}</p>

	<div class="mt-5 flex flex-wrap items-center gap-2">
		{#if project.category}
			<span
				class="border border-line-strong px-2.5 py-1 font-mono text-xs uppercase tracking-wider"
			>
				{project.category}
			</span>
		{/if}
		{#if project.featured}
			<span
				class="border border-accent px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-accent"
			>
				★ destacado
			</span>
		{/if}
	</div>

	<ul aria-label="Tecnologías" class="mt-5 flex flex-wrap gap-2">
		{#each project.technologies as tech (tech)}
			<li><TechBadge technology={tech} /></li>
		{/each}
	</ul>

	{#if project.image}
		<img
			src={project.image}
			alt={`Captura de ${project.title}`}
			loading="lazy"
			class="mt-10 w-full border border-line-strong shadow-brutal"
		/>
	{/if}

	{#if project.descriptionLong}
		<section aria-label="Descripción" class="mt-12">
			<h2 class="border-b-2 border-line-strong pb-3 font-display text-3xl font-bold tracking-tight">
				<span class="font-mono text-sm text-accent">// </span>Descripción
			</h2>
			<p class="mt-4 text-lg leading-relaxed">{project.descriptionLong}</p>
		</section>
	{/if}

	{#if project.architecture}
		<section aria-label="Arquitectura" class="mt-12">
			<h2 class="border-b-2 border-line-strong pb-3 font-display text-3xl font-bold tracking-tight">
				<span class="font-mono text-sm text-accent">// </span>Arquitectura
			</h2>
			<p class="mt-4 text-lg leading-relaxed">{project.architecture}</p>
		</section>
	{/if}

	{#if project.decisions?.length}
		<section aria-label="Decisiones técnicas" class="mt-12">
			<h2 class="border-b-2 border-line-strong pb-3 font-display text-3xl font-bold tracking-tight">
				<span class="font-mono text-sm text-accent">// </span>Decisiones técnicas
			</h2>
			<ul class="tick-list mt-4 flex flex-col gap-2 text-lg">
				{#each project.decisions as decision (decision)}
					<li>{decision}</li>
				{/each}
			</ul>
		</section>
	{/if}

	{#if project.problems?.length}
		<section aria-label="Problemas resueltos" class="mt-12">
			<h2 class="border-b-2 border-line-strong pb-3 font-display text-3xl font-bold tracking-tight">
				<span class="font-mono text-sm text-accent">// </span>Problemas que resolví
			</h2>
			<ul class="tick-list mt-4 flex flex-col gap-2 text-lg">
				{#each project.problems as problem (problem)}
					<li>{problem}</li>
				{/each}
			</ul>
		</section>
	{/if}

	{#if project.gallery?.length}
		<section aria-label="Galería" class="mt-12">
			<h2 class="border-b-2 border-line-strong pb-3 font-display text-3xl font-bold tracking-tight">
				<span class="font-mono text-sm text-accent">// </span>Galería
			</h2>
			<div class="mt-6 grid gap-4 sm:grid-cols-2">
				{#each project.gallery as src (src)}
					<img
						{src}
						alt={`Imagen de ${project.title}`}
						loading="lazy"
						class="border border-line-strong shadow-brutal-sm"
					/>
				{/each}
			</div>
		</section>
	{/if}

	<div class="mt-12 flex flex-wrap gap-3">
		<a
			href={project.github}
			target="_blank"
			rel="noreferrer"
			class="border border-line-strong px-5 py-2.5 font-mono text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-fg hover:text-bg"
		>
			{project.githubFrontend ? 'Backend en GitHub' : 'Ver en GitHub'}
		</a>
		{#if project.githubFrontend}
			<a
				href={project.githubFrontend}
				target="_blank"
				rel="noreferrer"
				class="border border-line-strong px-5 py-2.5 font-mono text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-fg hover:text-bg"
			>
				Frontend en GitHub
			</a>
		{/if}
		{#if project.demo}
			<a
				href={project.demo}
				target="_blank"
				rel="noreferrer"
				class="border border-line-strong bg-accent px-5 py-2.5 font-mono text-sm font-semibold uppercase tracking-wider text-accent-fg shadow-brutal-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
			>
				{project.demoFrontend ? 'Probar API' : 'Ver demo'}
			</a>
		{/if}
		{#if project.demoFrontend}
			<a
				href={project.demoFrontend}
				target="_blank"
				rel="noreferrer"
				class="border border-line-strong px-5 py-2.5 font-mono text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-fg hover:text-bg"
			>
				Abrir app
			</a>
		{/if}
	</div>
</main>
