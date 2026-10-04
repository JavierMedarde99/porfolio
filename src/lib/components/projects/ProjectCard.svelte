<script lang="ts">
	import TechBadge from '$lib/components/projects/TechBadge.svelte';
	import type { Project } from '$lib/types/project';

	interface Props {
		project: Project;
		index?: number;
	}

	let { project, index = 0 }: Props = $props();

	const indexLabel = $derived(index > 0 ? String(index).padStart(2, '0') : '★');
</script>

<article
	class="group flex flex-col border border-line-strong bg-surface shadow-brutal-sm transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal focus-within:ring-2 focus-within:ring-accent"
>
	<div class="relative h-44 overflow-hidden border-b border-line-strong">
		{#if project.image}
			<img
				src={project.image}
				alt={`Captura de ${project.title}`}
				loading="lazy"
				class="h-full w-full object-cover grayscale-[35%] transition-all duration-300 group-hover:grayscale-0 group-hover:scale-[1.03]"
			/>
		{:else}
			<div aria-hidden="true" class="bg-grid flex h-full w-full items-center justify-center">
				<span class="font-mono text-6xl font-semibold text-accent">{indexLabel}</span>
			</div>
		{/if}
		<span
			class="absolute top-3 left-3 border border-line-strong bg-fg px-2 py-0.5 font-mono text-[11px] font-semibold text-bg"
		>
			{indexLabel}
		</span>
	</div>

	<div class="flex flex-1 flex-col gap-3 p-5">
		<div class="flex items-start justify-between gap-2">
			<h2 class="font-display text-xl font-bold tracking-tight">
				<a
					href={`/projects/${project.slug}`}
					class="transition-colors group-hover:text-accent focus:outline-none"
				>
					{project.title}
				</a>
			</h2>
			{#if project.category}
				<span
					class="shrink-0 border border-line-strong px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider"
				>
					{project.category}
				</span>
			{/if}
		</div>

		<p class="text-sm text-muted">{project.description}</p>

		<ul aria-label={`Tecnologías de ${project.title}`} class="flex flex-wrap gap-1.5">
			{#each project.technologies as tech (tech)}
				<li><TechBadge technology={tech} /></li>
			{/each}
		</ul>

		<div class="mt-auto flex flex-wrap gap-2 pt-2">
			<a
				href={project.github}
				target="_blank"
				rel="noreferrer"
				aria-label={project.githubFrontend
					? `Código backend de ${project.title} en GitHub`
					: `Código de ${project.title} en GitHub`}
				class="flex items-center gap-1.5 border border-line-strong px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-wide transition-colors hover:bg-fg hover:text-bg"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="14"
					height="14"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path
						d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
					/>
					<path d="M9 18c-4.51 2-5-2-7-2" />
				</svg>
				{project.githubFrontend ? 'Backend' : 'GitHub'}
			</a>
			{#if project.githubFrontend}
				<a
					href={project.githubFrontend}
					target="_blank"
					rel="noreferrer"
					aria-label={`Código frontend de ${project.title} en GitHub`}
					class="flex items-center gap-1.5 border border-line-strong px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-wide transition-colors hover:bg-fg hover:text-bg"
				>
					Frontend
				</a>
			{/if}
			{#if project.demo}
				<a
					href={project.demo}
					target="_blank"
					rel="noreferrer"
					aria-label={project.demoFrontend ? `API de ${project.title}` : `Demo de ${project.title}`}
					class="flex items-center gap-1.5 border border-line-strong bg-accent px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-wide text-accent-fg shadow-brutal-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
				>
					{project.demoFrontend ? 'API' : 'Demo'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="12"
						height="12"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path d="M7 7h10v10" />
						<path d="M7 17 17 7" />
					</svg>
				</a>
			{/if}
			{#if project.demoFrontend}
				<a
					href={project.demoFrontend}
					target="_blank"
					rel="noreferrer"
					aria-label={`App de ${project.title}`}
					class="flex items-center gap-1.5 border border-line-strong px-3 py-1.5 font-mono text-xs font-medium uppercase tracking-wide transition-colors hover:bg-fg hover:text-bg"
				>
					App
				</a>
			{/if}
		</div>
	</div>
</article>
