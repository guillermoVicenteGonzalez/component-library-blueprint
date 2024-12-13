import pluginJs from "@eslint/js";
import * as cssModules from "eslint-plugin-css-modules";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import pluginStorybook from "eslint-plugin-storybook";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ name: "app/files to lint", files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
	{
		name: "files to ignore",
		ignores: [
			"**/dist/**",
			"**/dist-ssr/**",
			"**/coverage/**",
			"**/.blueprints/**",
		],
	},

	//storybook only config
	...pluginStorybook.configs["flat/recommended"],
	{
		files: ["**/*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
		rules: {
			// example of overriding a rule
			"storybook/hierarchy-separator": "error",
			// example of disabling a rule
			"storybook/default-exports": "off",
		},
	},

	{
		languageOptions: { globals: globals.browser },
		plugins: {
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat["jsx-runtime"],

	{
		name: "rules that couldn't be imported in other way",
		...cssModules.configs.recommended,

		rules: {
			...reactHooks.configs.recommended.rules,
			...reactRefresh.configs.vite.rules,
		},
	},

	//custom rules that should not be changed
	{
		name: "custom compulsory rules",
		rules: {
			"@typescript-eslint/no-empty-object-type": [
				"error",
				{
					allowInterfaces: "always",
				},
			],
		},
	},

	//custom rules than can be changed
	{
		name: "custom rules",
		rules: {
			"no-empty-function": "error",
			"no-unused-vars": "error",
		},
	},
];
