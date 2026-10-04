<script lang="ts">
	interface Props {
		technology: string;
	}

	let { technology }: Props = $props();
</script>

<span
	class="border border-line px-2.5 py-1 font-mono text-xs font-medium transition-colors hover:border-line-strong hover:text-accent"
>
	{technology}
</span>
