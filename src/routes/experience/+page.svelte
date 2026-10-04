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
		content="Trayectoria de Javier Medarde Mata: experiencia como Java Developer, formación y 11 cursos con certificación."
	/>
	<link rel="canonical" href={SITE.url + '/experience'} />
</svelte:head>
<SocialMeta
	title="Experiencia | Javier Medarde Mata"
	description="Trayectoria de Javier Medarde Mata: experiencia como Java Developer, formación y 11 cursos con certificación."
	path="/experience"
/>

<main class="mx-auto max-w-4xl px-4 py-16 md:py-20">
	<p class="font-mono text-sm uppercase tracking-widest text-accent">// 04 — experiencia</p>
	<h1 class="mt-2 font-display text-5xl font-bold tracking-tight md:text-6xl">Experiencia</h1>
	<p class="mt-3 max-w-2xl text-lg text-muted">
		Más de 3 años de experiencia profesional como Java Developer, especializado en Spring Boot,
		microservicios y despliegues cloud.
	</p>

	<section use:reveal aria-label="Experiencia profesional" class="mt-14">
		<ol class="relative ml-2 flex flex-col gap-12 border-l-2 border-line-strong pl-8">
			{#each EXPERIENCES as experience (experience.role)}
				<ExperienceCard {experience} />
			{/each}
		</ol>
	</section>

	<section use:reveal aria-label="Formación" class="mt-20">
		<p class="font-mono text-sm uppercase tracking-widest text-accent">// formación</p>
		<h2 class="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">Formación</h2>
		<ul class="mt-8 flex flex-col">
			{#each EDUCATION as item (item.title)}
				<li class="flex flex-col gap-1 border-b border-dashed border-line-strong py-6">
					<p class="font-mono text-xs uppercase tracking-widest text-accent">{item.period}</p>
					<h3 class="font-display text-xl font-bold md:text-2xl">{item.title}</h3>
					<p class="text-muted">{item.school}</p>
				</li>
			{/each}
		</ul>
	</section>

	<section use:reveal aria-label="Cursos y certificaciones" class="mt-20">
		<p class="font-mono text-sm uppercase tracking-widest text-accent">// certificaciones</p>
		<h2 class="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
			Cursos y certificaciones
		</h2>
		<ul class="mt-8 grid gap-6 sm:grid-cols-2">
			{#each COURSES as course (course.title)}
				<li
					class="flex flex-col gap-1 border border-line-strong bg-surface p-5 shadow-brutal-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal"
				>
					<div class="flex items-start justify-between gap-2">
						<h3 class="font-display text-lg font-bold">{course.title}</h3>
						<span
							class="shrink-0 border border-line-strong px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider"
						>
							{course.platform}
						</span>
					</div>
					{#if course.items}
						<ul class="mt-2 flex flex-col gap-1">
							{#each course.items as item (item.title)}
								<li>
									{#if item.credentialUrl}
										<a
											href={item.credentialUrl}
											target="_blank"
											rel="noopener noreferrer"
											class="group inline-flex items-center gap-1 font-mono text-sm text-accent underline-offset-4 hover:underline"
										>
											{item.title}
											<span
												aria-hidden="true"
												class="transition-transform group-hover:translate-x-0.5">→</span
											>
										</a>
									{:else}
										<span class="font-mono text-sm text-muted">{item.title}</span>
									{/if}
								</li>
							{/each}
						</ul>
					{:else if course.credentialUrl}
						<a
							href={course.credentialUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="group mt-2 inline-flex items-center gap-1 self-start font-mono text-sm text-accent underline-offset-4 hover:underline"
						>
							Ver certificado
							<span aria-hidden="true" class="transition-transform group-hover:translate-x-0.5"
								>→</span
							>
						</a>
					{/if}
				</li>
			{/each}
		</ul>
	</section>
</main>
