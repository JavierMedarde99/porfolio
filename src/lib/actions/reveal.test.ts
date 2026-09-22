import { afterEach, describe, expect, it, vi } from 'vitest';
import { reveal } from '$lib/actions/reveal';

let callback: IntersectionObserverCallback = () => {};

class ManualObserver implements IntersectionObserver {
	readonly root: Element | null = null;
	readonly rootMargin = '';
	readonly thresholds: number[] = [];
	constructor(cb: IntersectionObserverCallback) {
		callback = cb;
	}
	observe(): void {}
	unobserve(): void {}
	disconnect(): void {}
	takeRecords(): IntersectionObserverEntry[] {
		return [];
	}
}

vi.stubGlobal('IntersectionObserver', ManualObserver);

afterEach(() => {
	document.body.innerHTML = '';
});

function intersect(isIntersecting: boolean): void {
	const target = document.querySelector('.reveal') as Element;
	callback([{ isIntersecting, target } as IntersectionObserverEntry], {} as IntersectionObserver);
}

describe('reveal', () => {
	it('oculta hasta entrar en viewport y luego revela una vez', () => {
		const node = document.createElement('section');
		document.body.appendChild(node);
		const handle = reveal(node);

		expect(node.classList.contains('reveal')).toBe(true);
		intersect(false);
		expect(node.classList.contains('is-visible')).toBe(false);
		intersect(true);
		expect(node.classList.contains('is-visible')).toBe(true);
		handle.destroy();
	});
});
