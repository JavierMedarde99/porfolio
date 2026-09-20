<script lang="ts">
	import { NAV_LINKS } from '$lib/data/navigation';

	interface Props {
		open: boolean;
		onClose: () => void;
		isDark: boolean;
		onToggleTheme: () => void;
	}

	let { open, onClose, isDark, onToggleTheme }: Props = $props();

	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Escape') onClose();
	}

	$effect(() => {
		if (open) {
			document.querySelector<HTMLAnchorElement>('[role="dialog"] nav a')?.focus();
		}
	});
</script>

<svelte:window onkeydown={handleKeydown} />

{#if open}
	<div class="fixed inset-0 z-50 md:hidden">
		<button
			class="absolute inset-0 cursor-default bg-black/50"
			aria-label="Cerrar menú"
			onclick={onClose}
			tabindex="-1"
		></button>
		<div
			role="dialog"
			aria-modal="true"
			aria-label="Menú de navegación"
			class="absolute top-0 right-0 flex h-full w-64 flex-col gap-2 bg-white p-6 shadow-xl transition-colors dark:bg-zinc-950"
		>
			<div class="flex items-center justify-between">
				<span class="text-lg font-bold">Menú</span>
				<button
					aria-label="Cerrar menú"
					onclick={onClose}
					class="rounded-md p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
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
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					</svg>
				</button>
			</div>
			<nav>
				<ul class="flex flex-col gap-1">
					{#each NAV_LINKS as link}
						<li>
							<a
								href={link.href}
								onclick={onClose}
								class="block rounded-md px-3 py-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
			<button
				onclick={onToggleTheme}
				class="mt-auto rounded-md border border-zinc-200 px-3 py-2 text-left transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-800"
			>
				{isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
			</button>
		</div>
	</div>
{/if}
