<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from '../../../routes/contact/$types';

	interface Props {
		form: ActionData;
	}

	let { form }: Props = $props();

	let pending = $state(false);
	let formElement: HTMLFormElement | undefined = $state();

	const failure = $derived(
		form && typeof form === 'object' && 'errors' in form && form.errors ? form : undefined
	);
	const serverError = $derived(failure?.errors._server);
	const fieldErrors = $derived(failure?.errors);
	const values = $derived(failure?.values);
	const success = $derived(form?.success === true);
</script>

{#if success}
	<div
		role="status"
		class="rounded-lg border border-green-300 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950"
	>
		<p class="font-semibold">Mensaje enviado.</p>
		<p class="text-sm opacity-80">Gracias por escribir. Te respondo en 24-48h.</p>
	</div>
{:else}
	<form
		bind:this={formElement}
		method="POST"
		use:enhance={() => {
			pending = true;
			return async ({ update }) => {
				await update();
				pending = false;
				formElement?.reset();
			};
		}}
		class="flex flex-col gap-4"
	>
		{#if serverError}
			<p
				role="alert"
				class="rounded-lg border border-red-300 bg-red-50 p-3 text-sm dark:border-red-800 dark:bg-red-950"
			>
				{serverError}
			</p>
		{/if}

		<div class="flex flex-col gap-1">
			<label for="nombre" class="text-sm font-medium">Nombre</label>
			<input
				id="nombre"
				name="nombre"
				type="text"
				required
				minlength="2"
				maxlength="100"
				autocomplete="name"
				value={values?.nombre ?? ''}
				aria-invalid={fieldErrors?.nombre ? 'true' : undefined}
				class="rounded-md border border-zinc-300 bg-transparent px-3 py-2 transition-colors focus:border-zinc-500 focus:outline-none dark:border-zinc-700"
			/>
			{#if fieldErrors?.nombre}
				<p class="text-sm text-red-600 dark:text-red-400">{fieldErrors.nombre}</p>
			{/if}
		</div>

		<div class="flex flex-col gap-1">
			<label for="email" class="text-sm font-medium">Email</label>
			<input
				id="email"
				name="email"
				type="email"
				required
				autocomplete="email"
				value={values?.email ?? ''}
				aria-invalid={fieldErrors?.email ? 'true' : undefined}
				class="rounded-md border border-zinc-300 bg-transparent px-3 py-2 transition-colors focus:border-zinc-500 focus:outline-none dark:border-zinc-700"
			/>
			{#if fieldErrors?.email}
				<p class="text-sm text-red-600 dark:text-red-400">{fieldErrors.email}</p>
			{/if}
		</div>

		<div class="flex flex-col gap-1">
			<label for="asunto" class="text-sm font-medium"
				>Asunto <span class="opacity-60">(opcional)</span></label
			>
			<input
				id="asunto"
				name="asunto"
				type="text"
				maxlength="150"
				value={values?.asunto ?? ''}
				class="rounded-md border border-zinc-300 bg-transparent px-3 py-2 transition-colors focus:border-zinc-500 focus:outline-none dark:border-zinc-700"
			/>
		</div>

		<div class="flex flex-col gap-1">
			<label for="mensaje" class="text-sm font-medium">Mensaje</label>
			<textarea
				id="mensaje"
				name="mensaje"
				required
				minlength="10"
				maxlength="5000"
				rows="5"
				aria-invalid={fieldErrors?.mensaje ? 'true' : undefined}
				class="rounded-md border border-zinc-300 bg-transparent px-3 py-2 transition-colors focus:border-zinc-500 focus:outline-none dark:border-zinc-700"
				>{values?.mensaje ?? ''}</textarea
			>
			{#if fieldErrors?.mensaje}
				<p class="text-sm text-red-600 dark:text-red-400">{fieldErrors.mensaje}</p>
			{/if}
		</div>

		<button
			type="submit"
			disabled={pending}
			class="rounded-md bg-zinc-900 px-4 py-2 font-medium text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-zinc-900"
		>
			{pending ? 'Enviando…' : 'Enviar mensaje'}
		</button>
	</form>
{/if}
