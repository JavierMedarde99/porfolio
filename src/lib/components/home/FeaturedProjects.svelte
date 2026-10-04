<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import ProjectCard from '$lib/components/projects/ProjectCard.svelte';
	import { getFeaturedProjects } from '$lib/data/projects';

	const featured = getFeaturedProjects().slice(0, 3);
</script>

<section use:reveal aria-label="Proyectos destacados" class="mx-auto max-w-6xl px-4 py-16 md:py-20">
	<div class="flex flex-wrap items-end justify-between gap-4">
		<div>
			<p class="font-mono text-sm uppercase tracking-widest text-accent">
				// 01 — proyectos destacados
			</p>
			<h2 class="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">
				Proyectos destacados
			</h2>
		</div>
		<a
			href="/projects"
			class="group inline-flex items-center gap-1.5 font-mono text-sm font-medium underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
		>
			Ver todos
			<span aria-hidden="true" class="transition-transform group-hover:translate-x-1">→</span>
		</a>
	</div>
	<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
		{#each featured as project, i (project.slug)}
			<ProjectCard {project} index={i + 1} />
		{/each}
	</div>
</section>
