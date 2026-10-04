<script lang="ts">
	import SocialMeta from '$lib/components/seo/SocialMeta.svelte';
	import { reveal } from '$lib/actions/reveal';
	import { pageTitle, SITE } from '$lib/utils/seo';
	import TechBadge from '$lib/components/projects/TechBadge.svelte';
	import { GROUP_PROJECTS, WORK_METHOD } from '$lib/data/about';
	import { SKILL_GROUPS } from '$lib/data/skills';
</script>

<svelte:head>
	<title>{pageTitle('Sobre mí')}</title>
	<meta
		name="description"
		content="Javier Medarde Mata: Java Backend Developer con más de 3 años de experiencia en Spring Boot, microservicios y cloud."
	/>
	<link rel="canonical" href={SITE.url + '/about'} />
</svelte:head>
<SocialMeta
	title="Sobre mí | Javier Medarde Mata"
	description="Javier Medarde Mata: Java Backend Developer con más de 3 años de experiencia en Spring Boot, microservicios y cloud."
	path="/about"
/>

<main class="mx-auto max-w-5xl px-4 py-16 md:py-20">
	<p class="font-mono text-sm uppercase tracking-widest text-accent">// 02 — sobre mí</p>
	<h1 class="mt-2 font-display text-5xl font-bold tracking-tight md:text-6xl">Sobre mí</h1>
	<p class="mt-3 font-mono text-sm text-muted">Java Backend Developer · Full Stack</p>

	<section use:reveal aria-label="Perfil" class="mt-8 flex flex-col gap-5 text-lg">
		<p class="dropcap">
			Soy desarrollador backend con más de 3 años de experiencia profesional, especializado en Java
			y Spring Boot. Trabajo con arquitecturas de microservicios, mensajería asíncrona y despliegues
			cloud en entornos de producción.
		</p>
		<p>
			Me interesa construir sistemas robustos, escalables y bien testeados. Cuando el proyecto lo
			pide, también uso tecnología frontend (Svelte, React) y móvil (Flutter) para hacer el flujo
			completo.
		</p>
		<p>
			Vivo en Marbella y trabajo con equipos en inglés cuando hace falta.
			<a
				href="/experience"
				class="font-medium underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
				>Ver mi experiencia</a
			>
			o
			<a
				href="/projects"
				class="font-medium underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
				>ver mis proyectos</a
			>.
		</p>
	</section>

	<section use:reveal aria-label="Habilidades por área" class="mt-16">
		<p class="font-mono text-sm uppercase tracking-widest text-accent">// skills</p>
		<h2 class="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">Skills</h2>
		<div class="mt-8 grid gap-6 sm:grid-cols-2">
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
					{#if GROUP_PROJECTS[group.title]}
						<a
							href={`/projects/${GROUP_PROJECTS[group.title].slug}`}
							class="group mt-4 inline-flex items-center gap-1.5 font-mono text-sm font-medium underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
						>
							{GROUP_PROJECTS[group.title].label}
							<span aria-hidden="true" class="transition-transform group-hover:translate-x-1"
								>→</span
							>
						</a>
					{/if}
				</div>
			{/each}
		</div>
	</section>

	<section use:reveal aria-label="Forma de trabajar" class="mt-16">
		<p class="font-mono text-sm uppercase tracking-widest text-accent">// método</p>
		<h2 class="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">Cómo trabajo</h2>
		<ol class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
			{#each WORK_METHOD as item (item.step)}
				<li
					class="flex flex-col border border-line-strong bg-surface p-5 shadow-brutal-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-brutal"
				>
					<p class="font-display text-4xl font-bold text-accent">{item.step}</p>
					<h3 class="mt-2 font-display text-lg font-bold">{item.title}</h3>
					<p class="mt-1 text-sm text-muted">{item.text}</p>
				</li>
			{/each}
		</ol>
	</section>
</main>
