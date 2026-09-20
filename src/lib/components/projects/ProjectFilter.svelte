<script module lang="ts">
	export const CATEGORIES = ['Todos', 'Backend', 'Frontend', 'Mobile', 'Full Stack'] as const;
	export type CategoryFilter = (typeof CATEGORIES)[number];
</script>

<script lang="ts">
	interface Props {
		category?: CategoryFilter;
		technologies?: string[];
		availableTechnologies?: string[];
	}

	let {
		category = $bindable<CategoryFilter>('Todos'),
		technologies = $bindable<string[]>([]),
		availableTechnologies = [],
	}: Props = $props();

	function toggleTechnology(tech: string): void {
		technologies = technologies.includes(tech)
			? technologies.filter((item) => item !== tech)
			: [...technologies, tech];
	}

	function clearFilters(): void {
		category = 'Todos';
		technologies = [];
	}
</script>

<div class="flex flex-col gap-4 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
	<fieldset>
		<legend class="mb-2 text-sm font-semibold tracking-wide uppercase opacity-70">Categoría</legend>
		<div class="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
			{#each CATEGORIES as item (item)}
				<button
					type="button"
					onclick={() => (category = item)}
					aria-pressed={category === item}
					class="rounded-full px-3 py-1.5 text-sm font-medium transition-colors {category === item
						? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
						: 'border border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800'}"
				>
					{item}
				</button>
			{/each}
		</div>
	</fieldset>

	<fieldset>
		<legend class="mb-2 text-sm font-semibold tracking-wide uppercase opacity-70"
			>Tecnologías</legend
		>
		<div class="flex flex-wrap gap-2">
			{#each availableTechnologies as tech (tech)}
				<label
					class="flex cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm transition-colors has-checked:bg-zinc-900 has-checked:text-white has-checked:dark:bg-white has-checked:dark:text-zinc-900 border-zinc-300 dark:border-zinc-700"
				>
					<input
						type="checkbox"
						checked={technologies.includes(tech)}
						onchange={() => toggleTechnology(tech)}
						class="sr-only"
					/>
					{tech}
				</label>
			{/each}
		</div>
	</fieldset>

	{#if category !== 'Todos' || technologies.length > 0}
		<button
			type="button"
			onclick={clearFilters}
			class="self-start text-sm underline opacity-70 transition-opacity hover:opacity-100"
		>
			Limpiar filtros
		</button>
	{/if}
</div>
