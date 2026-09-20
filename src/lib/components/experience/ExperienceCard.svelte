<script lang="ts">
	import type { Experience } from '$lib/data/experience';

	interface Props {
		experience: Experience;
	}

	let { experience }: Props = $props();
</script>

<li class="relative pl-8">
	<span
		aria-hidden="true"
		class="absolute top-1.5 left-0 h-3 w-3 rounded-full bg-zinc-900 dark:bg-white"
	></span>
	<article class="flex flex-col gap-3">
		<div>
			<p class="text-sm font-medium tracking-wide uppercase opacity-60">{experience.period}</p>
			<h2 class="text-xl font-bold">{experience.role}</h2>
			<p class="opacity-80">{experience.company}</p>
		</div>
		<ul class="flex list-disc flex-col gap-1 pl-5 opacity-90">
			{#each experience.description as item (item)}
				<li>{item}</li>
			{/each}
		</ul>
		<ul aria-label="Tecnologías utilizadas" class="flex flex-wrap gap-2">
			{#each experience.technologies as tech (tech)}
				<li
					class="rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium transition-colors dark:border-zinc-700"
				>
					{tech}
				</li>
			{/each}
		</ul>
	</article>
</li>
