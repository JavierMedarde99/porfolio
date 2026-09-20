<script lang="ts">
	interface Props {
		technology: string;
	}

	let { technology }: Props = $props();
</script>

<span
	class="rounded-full border border-zinc-300 px-3 py-1 text-xs font-medium transition-colors dark:border-zinc-700"
>
	{technology}
</span>
