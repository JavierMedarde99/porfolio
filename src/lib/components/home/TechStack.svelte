<script lang="ts">
	import TechBadge from '$lib/components/projects/TechBadge.svelte';
	import { SKILL_GROUPS } from '$lib/data/skills';
</script>

<section aria-label="Stack tecnológico" class="mx-auto max-w-4xl px-4 py-12">
	<h2 class="text-2xl font-bold tracking-tight">Tech Stack</h2>
	<div class="mt-6 grid gap-6 sm:grid-cols-2">
		{#each SKILL_GROUPS as group (group.title)}
			<div class="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
				<h3 class="font-semibold">{group.title}</h3>
				<ul class="mt-3 flex flex-wrap gap-1.5">
					{#each group.items as tech (tech)}
						<li><TechBadge technology={tech} /></li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>
