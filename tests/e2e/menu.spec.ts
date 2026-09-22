import { expect, test } from '@playwright/test';

test.use({ viewport: { width: 375, height: 812 } });

test('el menú móvil se cierra al navegar a otra ruta', async ({ page }) => {
	await page.goto('/');
	await page.getByRole('button', { name: 'Abrir menú' }).click();
	await expect(page.getByRole('dialog')).toBeVisible();
	await page.getByRole('dialog').getByRole('link', { name: 'About' }).click();
	await expect(page).toHaveURL(/\/about\/?$/);
	await expect(page.getByRole('dialog')).toHaveCount(0);
});
