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
			// Sin base path configurado: los href planos son correctos
			'svelte/no-navigation-without-resolve': 'off',
		},
	}
);
