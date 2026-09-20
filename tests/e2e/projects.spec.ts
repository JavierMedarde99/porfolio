import { expect, test } from '@playwright/test';

test('filtrar por Mobile muestra solo F1-Bet', async ({ page }) => {
	await page.goto('/projects');
	await expect(page.getByText('4 de 4 proyectos')).toBeVisible();
	await page.getByRole('button', { name: 'Mobile', exact: true }).click();
	await expect(page.getByText('1 de 4 proyectos')).toBeVisible();
	await expect(page.getByRole('link', { name: 'F1-Bet', exact: true })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Money Manager', exact: true })).not.toBeVisible();
});

test('click en tarjeta abre la página del proyecto', async ({ page }) => {
	await page.goto('/projects');
	await page.getByRole('link', { name: 'F1-Bet', exact: true }).click();
	await expect(page).toHaveURL(/\/projects\/f1-bet\/?$/);
	await expect(page.getByRole('heading', { name: 'F1-Bet', level: 1 })).toBeVisible();
});

test('slug inválido devuelve 404', async ({ page }) => {
	const response = await page.goto('/projects/no-existe');
	expect(response?.status()).toBe(404);
});
