/**
 * Revela un elemento con fade + slide-up cuando entra en el viewport.
 * Uso: `<section use:reveal>…</section>`
 * Respeta `prefers-reduced-motion` vía CSS (ver `.reveal` en app.css).
 */
export function reveal(node: HTMLElement): { destroy: () => void } {
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					observer.disconnect();
				}
			}
		},
		{ threshold: 0.1 }
	);

	node.classList.add('reveal');
	observer.observe(node);

	return {
		destroy: () => observer.disconnect(),
	};
}
