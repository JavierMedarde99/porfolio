<script lang="ts">
	import TechBadge from '$lib/components/projects/TechBadge.svelte';
	import type { Project } from '$lib/types/project';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();
</script>

<article
	class="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-zinc-500 dark:border-zinc-800 dark:bg-zinc-950"
>
	{#if project.image}
		<img
			src={project.image}
			alt={`Captura de ${project.title}`}
			loading="lazy"
			class="h-44 w-full object-cover"
		/>
	{:else}
		<div
			aria-hidden="true"
			class="flex h-44 w-full items-center justify-center bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900"
		>
			<span class="text-5xl font-bold opacity-30">{project.title.charAt(0)}</span>
		</div>
	{/if}

	<div class="flex flex-1 flex-col gap-3 p-5">
		<div class="flex items-start justify-between gap-2">
			<h2 class="text-lg font-bold">
				<a
					href={`/projects/${project.slug}`}
					class="transition-colors group-hover:underline focus:outline-none"
				>
					{project.title}
				</a>
			</h2>
			{#if project.category}
				<span
					class="shrink-0 rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium dark:bg-zinc-800"
				>
					{project.category}
				</span>
			{/if}
		</div>

		<p class="text-sm opacity-80">{project.description}</p>

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
				class="flex items-center gap-1.5 rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
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
					class="flex items-center gap-1.5 rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
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
					class="flex items-center gap-1.5 rounded-md bg-zinc-900 px-3 py-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-zinc-900"
				>
					{project.demoFrontend ? 'API' : 'Demo'}
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
					class="flex items-center gap-1.5 rounded-md border border-zinc-900 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-zinc-100 dark:border-white dark:hover:bg-zinc-800"
				>
					App
				</a>
			{/if}
		</div>
	</div>
</article>
