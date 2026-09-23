<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { NAV_LINKS } from '$lib/data/navigation';
	import { initTheme, theme, toggleTheme } from '$lib/stores/theme';
	import MobileMenu from './MobileMenu.svelte';

	let menuOpen = $state(false);
	let menuButton: HTMLButtonElement | undefined = $state();

	function handleMenuClose(): void {
		menuOpen = false;
		menuButton?.focus();
	}

	// Cierra el menú ante cualquier navegación (click, teclado, programática),
	// no solo ante clicks explícitos en los links
	afterNavigate(() => {
		menuOpen = false;
	});

	onMount(() => {
		initTheme();
	});
</script>

<header
	class="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur transition-colors dark:border-zinc-800 dark:bg-zinc-950/80"
>
	<nav
		aria-label="Navegación principal"
		class="mx-auto flex h-16 max-w-5xl items-center justify-between px-4"
	>
		<a href="/" class="flex items-center gap-2 text-lg font-bold tracking-tight">
			<span
				aria-hidden="true"
				class="flex h-8 w-8 items-center justify-center rounded-md bg-zinc-900 text-sm text-white dark:bg-white dark:text-zinc-900"
			>
				JM
			</span>
			<span>Javi Med</span>
		</a>

		<ul class="hidden items-center gap-6 md:flex">
			{#each NAV_LINKS as link (link.href)}
				<li>
					<a
						href={link.href}
						aria-current={$page.url.pathname === link.href ? 'page' : undefined}
						class="text-sm transition-colors hover:text-zinc-500 dark:hover:text-zinc-400 {$page.url
							.pathname === link.href
							? 'font-semibold'
							: ''}"
					>
						{link.label}
					</a>
				</li>
			{/each}
		</ul>

		<div class="flex items-center gap-2">
			<button
				onclick={toggleTheme}
				aria-label={$theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
				class="flex min-h-11 min-w-11 items-center justify-center rounded-md p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
			>
				{#if $theme === 'dark'}
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
						<circle cx="12" cy="12" r="4" />
						<path d="M12 2v2" />
						<path d="M12 20v2" />
						<path d="m4.93 4.93 1.41 1.41" />
						<path d="m17.66 17.66 1.41 1.41" />
						<path d="M2 12h2" />
						<path d="M20 12h2" />
						<path d="m6.34 17.66-1.41 1.41" />
						<path d="m19.07 4.93-1.41 1.41" />
					</svg>
				{:else}
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
						<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
					</svg>
				{/if}
			</button>

			<button
				bind:this={menuButton}
				onclick={() => (menuOpen = true)}
				aria-label="Abrir menú"
				aria-expanded={menuOpen}
				class="flex min-h-11 min-w-11 items-center justify-center rounded-md p-2 transition-colors hover:bg-zinc-100 md:hidden dark:hover:bg-zinc-800"
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
					<line x1="4" x2="20" y1="6" y2="6" />
					<line x1="4" x2="20" y1="12" y2="12" />
					<line x1="4" x2="20" y1="18" y2="18" />
				</svg>
			</button>
		</div>
	</nav>
</header>

<MobileMenu
	open={menuOpen}
	onClose={handleMenuClose}
	isDark={$theme === 'dark'}
	onToggleTheme={toggleTheme}
/>
