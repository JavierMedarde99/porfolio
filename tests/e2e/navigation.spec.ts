import { expect, test } from '@playwright/test';

test('home carga con identidad y CTAs', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Javi Med', level: 1 })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Ver proyectos' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Contactar' })).toBeVisible();
});

test('navegar a proyectos desde la navbar', async ({ page }) => {
	await page.goto('/');
	await page
		.getByRole('navigation', { name: 'Navegación principal' })
		.getByRole('link', { name: 'Projects' })
		.click();
	await expect(page).toHaveURL(/\/projects\/?$/);
	await expect(page.getByRole('heading', { name: 'Proyectos', level: 1 })).toBeVisible();
});

test('el tema oscuro persiste tras recargar', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('button', { name: /cambiar a modo oscuro/i }).click();
	await expect(page.locator('html.dark')).toBeAttached();
	await page.reload();
	await expect(page.locator('html.dark')).toBeAttached();
});
