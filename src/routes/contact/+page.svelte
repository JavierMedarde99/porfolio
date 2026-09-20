<script lang="ts">
	import ContactForm from '$lib/components/contact/ContactForm.svelte';
	import type { ActionData } from './$types';

	interface Props {
		form: ActionData;
	}

	let { form }: Props = $props();
</script>

<svelte:head>
	<title>Contacto | Javi Med</title>
	<meta
		name="description"
		content="Contacta con Javi Med: formulario, email, GitHub y LinkedIn. Respuesta en 24-48h."
	/>
</svelte:head>

<main class="mx-auto max-w-4xl px-4 py-12">
	<h1 class="text-3xl font-bold tracking-tight">Contacto</h1>
	<p class="mt-2 opacity-80">¿Tienes un proyecto o quieres hablar? Escríbeme.</p>

	<div class="mt-8 grid gap-10 md:grid-cols-5">
		<div class="flex flex-col gap-4 md:col-span-3">
			<ContactForm {form} />
		</div>
		<aside class="flex flex-col gap-3 md:col-span-2" aria-label="Otras vías de contacto">
			<h2 class="text-lg font-semibold">Otras vías</h2>
			<a
				href="mailto:javiermedmata@gmail.com"
				class="rounded-lg border border-zinc-200 p-3 text-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
			>
				<span class="block font-medium">Email directo</span>
				<span class="opacity-70">javiermedmata@gmail.com</span>
			</a>
			<a
				href="https://github.com/JavierMedarde99"
				target="_blank"
				rel="noreferrer"
				class="rounded-lg border border-zinc-200 p-3 text-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
			>
				<span class="block font-medium">GitHub</span>
				<span class="opacity-70">github.com/JavierMedarde99</span>
			</a>
			<a
				href="https://www.linkedin.com/in/javier-medarde-mata-991689181"
				target="_blank"
				rel="noreferrer"
				class="rounded-lg border border-zinc-200 p-3 text-sm transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
			>
				<span class="block font-medium">LinkedIn</span>
				<span class="opacity-70">Respuesta en 24-48h</span>
			</a>
		</aside>
	</div>
</main>
