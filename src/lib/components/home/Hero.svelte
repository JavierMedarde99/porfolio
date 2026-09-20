<script lang="ts">
	import TechBadge from '$lib/components/projects/TechBadge.svelte';
	import { HERO_TECHS } from '$lib/data/skills';
</script>

<section aria-label="Presentación" class="mx-auto max-w-4xl px-4 pt-16 pb-12 text-center md:pt-24">
	<p class="text-sm font-medium tracking-widest uppercase opacity-60">Hola, soy</p>
	<h1 class="mt-2 text-5xl font-bold tracking-tight md:text-6xl">Javi Med</h1>
	<p class="mt-3 text-xl opacity-80 md:text-2xl">Backend / Full Stack Developer</p>
	<p class="mx-auto mt-4 max-w-2xl opacity-80">
		Construyo aplicaciones robustas con Java, Spring Boot y tecnologías modernas. Más de 3 años de
		experiencia en producción.
	</p>
	<div class="mt-6 flex flex-wrap justify-center gap-3">
		<a
			href="/projects"
			class="rounded-md bg-zinc-900 px-5 py-2.5 font-medium text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-zinc-900"
		>
			Ver proyectos
		</a>
		<a
			href="/contact"
			class="rounded-md border border-zinc-300 px-5 py-2.5 font-medium transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
		>
			Contactar
		</a>
	</div>
	<ul aria-label="Tecnologías destacadas" class="mt-8 flex flex-wrap justify-center gap-2">
		{#each HERO_TECHS as tech (tech)}
			<li><TechBadge technology={tech} /></li>
		{/each}
	</ul>
</section>
