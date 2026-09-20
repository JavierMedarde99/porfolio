<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import ExperienceCard from '$lib/components/experience/ExperienceCard.svelte';
	import { EDUCATION, EXPERIENCES } from '$lib/data/experience';
</script>

<svelte:head>
	<title>Experiencia | Javi Med</title>
	<meta
		name="description"
		content="Trayectoria profesional de Javi Med: más de 3 años como Java Developer con Spring Boot, microservicios y cloud."
	/>
</svelte:head>

<main class="mx-auto max-w-4xl px-4 py-12">
	<h1 class="text-3xl font-bold tracking-tight">Experiencia</h1>
	<p class="mt-2 opacity-80">
		Más de 3 años de experiencia profesional como Java Developer, especializado en Spring Boot,
		microservicios y despliegues cloud.
	</p>

	<section use:reveal aria-label="Experiencia profesional" class="mt-10">
		<ol class="flex flex-col gap-10 border-l border-zinc-200 pl-0 dark:border-zinc-800">
			{#each EXPERIENCES as experience (experience.role)}
				<ExperienceCard {experience} />
			{/each}
		</ol>
	</section>

	<section use:reveal aria-label="Formación" class="mt-14">
		<h2 class="text-2xl font-bold tracking-tight">Formación</h2>
		<ul class="mt-6 flex flex-col gap-6">
			{#each EDUCATION as item (item.title)}
				<li class="flex flex-col gap-1">
					<p class="text-sm font-medium tracking-wide uppercase opacity-60">{item.period}</p>
					<h3 class="text-lg font-semibold">{item.title}</h3>
					<p class="opacity-80">{item.school}</p>
				</li>
			{/each}
		</ul>
	</section>
</main>
