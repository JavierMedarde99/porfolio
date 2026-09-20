<script lang="ts">
	import TechBadge from '$lib/components/projects/TechBadge.svelte';
	import { SKILL_GROUPS } from '$lib/data/skills';

	const GROUP_PROJECTS: Record<string, { slug: string; label: string }> = {
		Backend: { slug: 'money-manager', label: 'Ver en Money Manager' },
		Frontend: { slug: 'portfolio', label: 'Ver en Portfolio' },
		Mobile: { slug: 'f1-bet', label: 'Ver en F1-Bet' },
		DevOps: { slug: 'collection-backend', label: 'Ver en Collection Backend' },
	};

	const WORK_METHOD = [
		{
			step: '01',
			title: 'Analizar',
			text: 'Entiendo el problema y los requisitos antes de escribir código.',
		},
		{ step: '02', title: 'Diseñar', text: 'Defino la arquitectura y los contratos de la API.' },
		{ step: '03', title: 'Implementar', text: 'Código limpio, tipado y commits pequeños.' },
		{ step: '04', title: 'Testear', text: 'Verifico cada cambio antes de integrarlo.' },
		{ step: '05', title: 'Mejorar', text: 'Refactor y rendimiento en cada iteración.' },
	];
</script>

<svelte:head>
	<title>Sobre mí | Javi Med</title>
	<meta
		name="description"
		content="Javi Med: Java Backend Developer con más de 3 años de experiencia en Spring Boot, microservicios y cloud."
	/>
</svelte:head>

<main class="mx-auto max-w-4xl px-4 py-12">
	<h1 class="text-3xl font-bold tracking-tight">Sobre mí</h1>
	<p class="mt-2 text-lg opacity-80">Java Backend Developer · Full Stack</p>

	<section aria-label="Perfil" class="mt-6 flex flex-col gap-4 opacity-90">
		<p>
			Soy desarrollador backend con más de 3 años de experiencia profesional, especializado en Java
			y Spring Boot. Trabajo con arquitecturas de microservicios, mensajería asíncrona y despliegues
			cloud en entornos de producción.
		</p>
		<p>
			Me interesa construir sistemas robustos, escalables y bien testeados. Cuando el proyecto lo
			pide, también bajo al frontend (Svelte, React) o al móvil (Flutter) para entregar la pieza
			completa.
		</p>
		<p>
			Vivo en Marbella y trabajo con equipos en inglés cuando hace falta.
			<a href="/experience" class="font-medium underline underline-offset-4">Ver mi experiencia</a>
			o
			<a href="/projects" class="font-medium underline underline-offset-4">ver mis proyectos</a>.
		</p>
	</section>

	<section aria-label="Habilidades por área" class="mt-12">
		<h2 class="text-2xl font-bold tracking-tight">Skills</h2>
		<div class="mt-6 grid gap-6 sm:grid-cols-2">
			{#each SKILL_GROUPS as group (group.title)}
				<div class="rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
					<h3 class="font-semibold">{group.title}</h3>
					<ul class="mt-3 flex flex-wrap gap-1.5">
						{#each group.items as tech (tech)}
							<li><TechBadge technology={tech} /></li>
						{/each}
					</ul>
					{#if GROUP_PROJECTS[group.title]}
						<a
							href={`/projects/${GROUP_PROJECTS[group.title].slug}`}
							class="mt-3 inline-block text-sm font-medium underline underline-offset-4"
						>
							{GROUP_PROJECTS[group.title].label} →
						</a>
					{/if}
				</div>
			{/each}
		</div>
	</section>

	<section aria-label="Forma de trabajar" class="mt-12">
		<h2 class="text-2xl font-bold tracking-tight">Cómo trabajo</h2>
		<ol class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
			{#each WORK_METHOD as item (item.step)}
				<li class="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
					<p class="text-sm font-bold opacity-50">{item.step}</p>
					<h3 class="mt-1 font-semibold">{item.title}</h3>
					<p class="mt-1 text-sm opacity-80">{item.text}</p>
				</li>
			{/each}
		</ol>
	</section>
</main>
