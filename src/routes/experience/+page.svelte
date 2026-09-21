<script lang="ts">
	import SocialMeta from '$lib/components/seo/SocialMeta.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { pageTitle, SITE } from '$lib/utils/seo';
	import ExperienceCard from '$lib/components/experience/ExperienceCard.svelte';
	import { COURSES, EDUCATION, EXPERIENCES } from '$lib/data/experience';
</script>

<svelte:head>
	<title>{pageTitle('Experiencia')}</title>
	<meta
		name="description"
		content="Trayectoria de Javi Med: experiencia como Java Developer, formación y 11 cursos con certificación."
	/>
	<link rel="canonical" href={SITE.url + '/experience'} />
</svelte:head>
<SocialMeta
	title="Experiencia | Javi Med"
	description="Trayectoria de Javi Med: experiencia como Java Developer, formación y 11 cursos con certificación."
	path="/experience"
/>

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

	<section use:reveal aria-label="Cursos y certificaciones" class="mt-14">
		<h2 class="text-2xl font-bold tracking-tight">Cursos y certificaciones</h2>
		<ul class="mt-6 grid gap-4 sm:grid-cols-2">
			{#each COURSES as course (course.title)}
				<li
					class="flex flex-col gap-1 rounded-xl border border-zinc-200 p-4 transition-colors dark:border-zinc-800"
				>
					<h3 class="font-semibold">{course.title}</h3>
					<p class="text-sm opacity-70">{course.platform}</p>
					{#if course.credentialUrl}
						<a
							href={course.credentialUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="mt-1 self-start text-sm font-medium underline underline-offset-4"
						>
							Ver certificado →
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</section>
</main>
