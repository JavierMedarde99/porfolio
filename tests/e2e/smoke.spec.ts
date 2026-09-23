import { expect, test } from '@playwright/test';

const ROUTES = ['/', '/about', '/projects', '/projects/money-manager', '/experience'];

for (const route of ROUTES) {
	test(`${route} carga sin errores de consola ni de página`, async ({ page }) => {
		const errors: string[] = [];
		page.on('pageerror', (error) => errors.push(`pageerror: ${error.message}`));
		page.on('console', (message) => {
			if (message.type() === 'error') errors.push(`console: ${message.text()}`);
		});
		const response = await page.goto(route);
		expect(response?.status()).toBeLessThan(400);
		expect(errors).toEqual([]);
	});
}
