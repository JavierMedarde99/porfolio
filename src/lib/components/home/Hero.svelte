<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import TechBadge from '$lib/components/projects/TechBadge.svelte';
	import { HERO_TECHS } from '$lib/data/skills';
</script>

<section
	use:reveal
	aria-label="Presentación"
	class="relative overflow-hidden border-b border-line-strong"
>
	<!-- Rejilla de blueprint con viñeta -->
	<div
		aria-hidden="true"
		class="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_35%,black,transparent)]"
	></div>

	<div
		class="relative mx-auto grid max-w-6xl gap-12 px-4 pt-20 pb-16 md:pt-28 lg:grid-cols-[1fr_auto] lg:items-center"
	>
		<div class="max-w-3xl">
			<p class="font-mono text-sm tracking-widest text-accent">
				// hola, soy <span class="cursor-blink" aria-hidden="true">▊</span>
			</p>
			<h1
				class="mt-4 font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
			>
				Javier <em class="italic text-accent">Medarde Mata</em>
			</h1>
			<p class="mt-4 text-xl font-medium md:text-2xl">Backend &amp; Full Stack Developer</p>
			<p class="mt-4 max-w-2xl text-lg text-muted">
				Construyo APIs robustas con Java y Spring Boot, microservicios que no se caen y despliegues
				cloud que aguantan producción. Y cuando el proyecto lo pide, también el frontend y la app
				móvil.
			</p>

			<p
				class="mt-6 flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-muted"
			>
				<span class="pulse-dot h-2 w-2 rounded-full bg-accent" aria-hidden="true"></span>
				Disponible para proyectos · Marbella, ES
			</p>

			<div class="mt-8 flex flex-col justify-start gap-3 sm:flex-row sm:flex-wrap">
				<a
					href="/projects"
					class="inline-flex min-h-11 items-center justify-center border border-line-strong bg-fg px-6 py-2.5 font-mono text-sm font-semibold uppercase tracking-wider text-bg shadow-brutal-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
				>
					Ver proyectos
				</a>
				<a
					href="mailto:javiermedmata@gmail.com"
					class="inline-flex min-h-11 items-center justify-center border border-line-strong px-6 py-2.5 font-mono text-sm font-semibold uppercase tracking-wider transition-colors hover:bg-surface"
				>
					Contactar
				</a>
			</div>

			<ul aria-label="Tecnologías destacadas" class="mt-10 flex flex-wrap gap-2">
				{#each HERO_TECHS as tech (tech)}
					<li><TechBadge technology={tech} /></li>
				{/each}
			</ul>
		</div>

		<!-- Badge circular giratorio -->
		<div class="relative hidden h-36 w-36 justify-self-end lg:block">
			<svg viewBox="0 0 100 100" class="animate-rotate-slow h-full w-full" aria-hidden="true">
				<defs>
					<path id="badge-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
				</defs>
				<text class="fill-fg font-mono text-[8px] uppercase">
					<textPath href="#badge-circle" textLength="236" lengthAdjust="spacingAndGlyphs">
						disponible · java · spring boot · microservicios · cloud ·
					</textPath>
				</text>
			</svg>
			<a
				href="/projects"
				aria-label="Ir a proyectos"
				class="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full border border-line-strong bg-accent text-accent-fg transition-transform hover:scale-105"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="22"
					height="22"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M12 5v14" />
					<path d="m19 12-7 7-7-7" />
				</svg>
			</a>
		</div>
	</div>
</section>
