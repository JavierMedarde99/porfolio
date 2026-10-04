<script module lang="ts">
	export const CATEGORIES = [
		'Todos',
		'Backend',
		'Frontend',
		'Mobile',
		'Full Stack',
		'Documentation',
	] as const;
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

<div class="border border-line-strong bg-surface p-5 shadow-brutal-sm md:p-6">
	<fieldset>
		<legend class="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Categoría</legend>
		<div class="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
			{#each CATEGORIES as item (item)}
				<button
					type="button"
					onclick={() => (category = item)}
					aria-pressed={category === item}
					class="border border-line-strong px-3 py-1.5 font-mono text-sm transition-all {category ===
					item
						? 'bg-fg text-bg shadow-brutal-sm'
						: 'hover:bg-surface hover:shadow-brutal-sm hover:-translate-y-0.5'}"
				>
					{item}
				</button>
			{/each}
		</div>
	</fieldset>

	<fieldset class="mt-5">
		<legend class="mb-3 font-mono text-xs uppercase tracking-widest text-muted">Tecnologías</legend>
		<div class="flex flex-wrap gap-2">
			{#each availableTechnologies as tech (tech)}
				<label
					class="flex cursor-pointer items-center gap-1.5 border border-line-strong px-3 py-1.5 font-mono text-sm transition-all has-checked:bg-fg has-checked:text-bg has-checked:shadow-brutal-sm hover:-translate-y-0.5"
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
			class="mt-5 font-mono text-xs uppercase tracking-widest underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
		>
			Limpiar filtros
		</button>
	{/if}
</div>
