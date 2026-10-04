<script lang="ts">
	import { NAV_LINKS } from '$lib/data/navigation';

	const year = new Date().getFullYear();
</script>

<footer class="border-t border-line-strong">
	<!-- Llamada a la acción -->
	<section aria-label="Contacto" class="border-b border-line-strong bg-grid px-4 py-16 md:py-20">
		<div class="mx-auto max-w-6xl">
			<p class="font-mono text-sm uppercase tracking-widest text-accent">// contacto</p>
			<h2 class="mt-3 font-display text-5xl font-bold tracking-tight md:text-7xl">
				¿<em class="italic text-accent">Hablamos</em>?
			</h2>
			<p class="mt-4 max-w-xl text-lg text-muted">
				Estoy abierto a proyectos backend, arquitecturas y equipos que necesiten alguien que escriba
				APIs robustas y las haga llegar a producción.
			</p>
			<a
				href="mailto:javiermedmata@gmail.com"
				aria-label="Escríbeme: javiermedmata@gmail.com"
				class="mt-8 inline-flex items-center gap-2 border border-line-strong bg-accent px-6 py-3 font-mono text-sm font-semibold uppercase tracking-wider text-accent-fg shadow-brutal-sm transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
			>
				javiermedmata@gmail.com
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d="M7 7h10v10" />
					<path d="M7 17 17 7" />
				</svg>
			</a>
		</div>
	</section>

	<div class="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
		<div class="flex flex-col gap-4">
			<span class="flex items-center gap-3">
				<span
					aria-hidden="true"
					class="flex h-9 w-9 items-center justify-center border border-line-strong bg-fg font-mono text-xs font-semibold text-bg"
				>
					JMM
				</span>
				<span class="font-display text-xl font-bold">Javier Medarde Mata</span>
			</span>
			<p class="text-sm text-muted">Backend &amp; Full Stack Developer.</p>
			<div class="flex gap-2">
				<a
					href="https://github.com/JavierMedarde99"
					target="_blank"
					rel="noreferrer"
					aria-label="GitHub de Javier Medarde Mata"
					class="flex min-h-11 min-w-11 items-center justify-center border border-line-strong p-2 transition-colors hover:bg-fg hover:text-bg"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path
							d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
						/>
						<path d="M9 18c-4.51 2-5-2-7-2" />
					</svg>
				</a>
				<a
					href="https://www.linkedin.com/in/javier-medarde-mata-991689181"
					target="_blank"
					rel="noreferrer"
					aria-label="LinkedIn de Javier Medarde Mata"
					class="flex min-h-11 min-w-11 items-center justify-center border border-line-strong p-2 transition-colors hover:bg-fg hover:text-bg"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path
							d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
						/>
						<rect width="4" height="12" x="2" y="9" />
						<circle cx="4" cy="4" r="2" />
					</svg>
				</a>
			</div>
		</div>

		<nav aria-label="Enlaces rápidos">
			<span class="mb-4 block font-mono text-xs uppercase tracking-widest text-muted"
				>// Secciones</span
			>
			<ul class="flex flex-col gap-3 font-mono text-sm">
				{#each NAV_LINKS as link, i (link.href)}
					<li>
						<a
							href={link.href}
							class="group inline-flex items-baseline gap-2 transition-colors hover:text-accent"
						>
							<span class="text-[10px] text-accent" aria-hidden="true">0{i + 1}</span>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div>
			<span class="mb-4 block font-mono text-xs uppercase tracking-widest text-muted"
				>// Contacto</span
			>
			<a
				href="mailto:javiermedmata@gmail.com"
				class="font-mono text-sm transition-colors hover:text-accent"
			>
				javiermedmata@gmail.com
			</a>
			<p class="mt-4 font-mono text-xs text-muted">Marbella, España · UTC+1</p>
		</div>
	</div>

	<div class="overflow-hidden border-t border-line-strong">
		<p
			aria-hidden="true"
			class="text-outline -mb-4 select-none text-center font-display text-[9vw] font-bold leading-[0.8] tracking-tight md:text-[8rem]"
		>
			JAVIER MEDARDE MATA
		</p>
		<p
			class="relative border-t border-line-strong bg-bg px-4 py-3 text-center font-mono text-xs text-muted"
		>
			© {year} Javier Medarde Mata. Todos los derechos reservados.
		</p>
	</div>
</footer>
