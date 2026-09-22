import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{
		ignores: [
			'.svelte-kit/',
			'build/',
			'dist/',
			'node_modules/',
			'static/',
			'.vercel/',
			'test-results/',
			'playwright-report/',
		],
	},
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
	},
	...tseslint.configs.recommended,
	...svelte.configs['flat/recommended'],
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
			},
		},
	},
	prettier,
	...svelte.configs['flat/prettier'],
	{
		rules: {
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			// La app se despliega en el root (Vercel, sin paths.base): los href
			// absolutos planos ('/about', '/projects/...') siempre resuelven bien.
			// La regla solo aportaría si hubiera subpath o rutas dinámicas
			// construidas por string; si eso cambia, reactivarla y usar resolve().
			'svelte/no-navigation-without-resolve': 'off',
		},
	}
);
