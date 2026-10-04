<script lang="ts">
	import { HERO_TECHS, SKILL_GROUPS } from '$lib/data/skills';

	// Marquee: la pista se recorre hasta -50%, así que el contenido
	// va exactamente duplicado para que el bucle sea continuo.
	const items = [...SKILL_GROUPS.flatMap((g) => g.items), ...HERO_TECHS].filter(
		(tech, i, all) => all.indexOf(tech) === i
	);
	const track = [...items, ...items];
</script>

<div aria-hidden="true" class="overflow-hidden border-b border-line-strong bg-fg py-3.5 text-bg">
	<div class="marquee-track items-center gap-8">
		{#each track as tech, i (i)}
			<span class="flex items-center gap-8 font-mono text-sm uppercase tracking-widest">
				{tech}
				<span class="text-accent">✦</span>
			</span>
		{/each}
	</div>
</div>
