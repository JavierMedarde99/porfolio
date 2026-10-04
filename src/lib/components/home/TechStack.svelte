<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import TechBadge from '$lib/components/projects/TechBadge.svelte';
	import { SKILL_GROUPS } from '$lib/data/skills';
</script>

<section use:reveal aria-label="Stack tecnológico" class="mx-auto max-w-5xl px-4 py-16 md:py-20">
	<p class="font-mono text-sm uppercase tracking-widest text-accent">// 02 — tech stack</p>
	<h2 class="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">Tech Stack</h2>
	<div class="mt-10 grid gap-6 sm:grid-cols-2">
		{#each SKILL_GROUPS as group (group.title)}
			<div
				class="border border-line-strong bg-surface p-6 shadow-brutal-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal"
			>
				<h3 class="font-display text-2xl font-bold">
					<span class="font-mono text-sm text-accent">// </span>{group.title}
				</h3>
				<ul class="mt-4 flex flex-wrap gap-2">
					{#each group.items as tech (tech)}
						<li><TechBadge technology={tech} /></li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>
