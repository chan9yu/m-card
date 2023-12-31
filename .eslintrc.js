module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 2022,
		sourceType: 'module'
	},
	extends: [
		'prettier',
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:import/recommended',
		'plugin:prettier/recommended',
		'plugin:react-hooks/recommended'
	],
	plugins: ['react', 'react-hooks', 'jsx-a11y', '@typescript-eslint'],
	settings: {
		react: {
			version: 'detect'
		},
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			}
		}
	},
	rules: {
		'@typescript-eslint/no-unused-vars': 'warn',
		'no-unused-vars': 'warn',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/react-in-jsx-scope': 'off',
		'react/no-unknown-property': ['error', { ignore: ['css'] }],
		'import/named': 'off'
	}
};
