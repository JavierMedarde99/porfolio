<script lang="ts">
	import type { Experience } from '$lib/data/experience';

	interface Props {
		experience: Experience;
	}

	let { experience }: Props = $props();
</script>

<li class="relative">
	<span
		aria-hidden="true"
		class="absolute top-2 -left-[41px] h-4 w-4 rotate-45 border border-line-strong bg-accent"
	></span>
	<article class="flex flex-col gap-4">
		<div>
			<p class="font-mono text-xs uppercase tracking-widest text-accent">{experience.period}</p>
			<h2 class="mt-1 font-display text-2xl font-bold tracking-tight md:text-3xl">
				{experience.role}
			</h2>
			<p class="mt-1 text-muted">{experience.company}</p>
		</div>
		<ul class="flex list-disc flex-col gap-1.5 pl-5 text-muted marker:text-accent">
			{#each experience.description as item (item)}
				<li>{item}</li>
			{/each}
		</ul>
		<ul aria-label="Tecnologías utilizadas" class="flex flex-wrap gap-2">
			{#each experience.technologies as tech (tech)}
				<li
					class="border border-line px-2.5 py-1 font-mono text-xs font-medium transition-colors hover:border-line-strong hover:text-accent"
				>
					{tech}
				</li>
			{/each}
		</ul>
	</article>
</li>
