import { vi } from 'vitest';
import '@testing-library/jest-dom/vitest';

// jsdom no implementa matchMedia: polyfill mínimo para componentes que lo usan
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: (query: string) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: () => {},
		removeListener: () => {},
		addEventListener: () => {},
		removeEventListener: () => {},
		dispatchEvent: () => false,
	}),
});

// jsdom no implementa IntersectionObserver: stub que revela de inmediato.
// Los tests que necesiten controlarlo lo sobrescriben con vi.stubGlobal.
class ImmediateObserver implements IntersectionObserver {
	readonly root: Element | null = null;
	readonly rootMargin = '';
	readonly thresholds: number[] = [];
	constructor(private callback: IntersectionObserverCallback) {}
	observe(target: Element): void {
		this.callback([{ isIntersecting: true, target } as IntersectionObserverEntry], this);
	}
	unobserve(): void {}
	disconnect(): void {}
	takeRecords(): IntersectionObserverEntry[] {
		return [];
	}
}

vi.stubGlobal('IntersectionObserver', ImmediateObserver);
