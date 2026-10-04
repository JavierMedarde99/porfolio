<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
</script>

<section use:reveal aria-label="Sobre mí (resumen)" class="mx-auto max-w-5xl px-4 py-16 md:py-20">
	<p class="font-mono text-sm uppercase tracking-widest text-accent">// 03 — sobre mí</p>
	<h2 class="mt-2 font-display text-4xl font-bold tracking-tight md:text-5xl">Sobre mí</h2>
	<blockquote
		class="mt-8 border border-line-strong border-l-4 border-l-accent bg-surface p-7 shadow-brutal-sm md:p-9"
	>
		<p class="font-display text-2xl leading-snug md:text-3xl">
			Soy desarrollador backend especializado en Java y Spring Boot, con experiencia en
			microservicios, mensajería asíncrona y despliegues cloud. También construyo frontends y apps
			móviles cuando el proyecto lo pide.
		</p>
	</blockquote>
	<a
		href="/about"
		class="group mt-6 inline-flex items-center gap-1.5 font-mono text-sm font-medium underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
	>
		Conóceme mejor
		<span aria-hidden="true" class="transition-transform group-hover:translate-x-1">→</span>
	</a>
</section>
