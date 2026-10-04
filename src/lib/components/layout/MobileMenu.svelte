<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { NAV_LINKS } from '$lib/data/navigation';

	interface Props {
		open: boolean;
		onClose: () => void;
		isDark: boolean;
		onToggleTheme: () => void;
	}

	let { open, onClose, isDark, onToggleTheme }: Props = $props();
	let dialog: HTMLDivElement | undefined = $state();
	let reducedMotion = $state(false);

	const FOCUSABLE = 'a[href], button:not([disabled])';

	onMount(() => {
		reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	});

	function handleKeydown(event: KeyboardEvent): void {
		if (event.key === 'Escape') {
			onClose();
			return;
		}
		if (event.key !== 'Tab' || !dialog) return;
		const items = [...dialog.querySelectorAll<HTMLElement>(FOCUSABLE)];
		if (items.length === 0) return;
		const first = items[0];
		const last = items[items.length - 1];
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
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
			class="absolute inset-0 cursor-default bg-fg/50"
			aria-label="Cerrar menú"
			onclick={onClose}
			tabindex="-1"
			transition:fade={{ duration: reducedMotion ? 0 : 200 }}
		></button>
		<div
			bind:this={dialog}
			role="dialog"
			aria-modal="true"
			aria-label="Menú de navegación"
			class="absolute top-0 right-0 flex h-full w-72 flex-col gap-2 border-l border-line-strong bg-bg p-6 shadow-brutal"
			transition:fly={{ x: reducedMotion ? 0 : 80, duration: reducedMotion ? 0 : 250 }}
		>
			<div class="flex items-center justify-between">
				<span class="font-mono text-sm uppercase tracking-widest text-accent">// menú</span>
				<button
					aria-label="Cerrar menú"
					onclick={onClose}
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
						<path d="M18 6 6 18" />
						<path d="m6 6 12 12" />
					</svg>
				</button>
			</div>
			<nav>
				<ul class="flex flex-col gap-1">
					{#each NAV_LINKS as link, i (link.href)}
						<li>
							<a
								href={link.href}
								onclick={onClose}
								class="flex items-baseline gap-3 border-b border-line px-2 py-4 font-display text-2xl font-bold tracking-tight transition-colors hover:border-accent hover:text-accent"
							>
								<span class="font-mono text-xs text-accent">0{i + 1}</span>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>
			<button
				onclick={onToggleTheme}
				class="mt-auto min-h-11 border border-line-strong px-3 py-2 text-left font-mono text-sm transition-colors hover:bg-fg hover:text-bg"
			>
				{isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
			</button>
		</div>
	</div>
{/if}
