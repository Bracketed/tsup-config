import { fixImportsPlugin } from 'esbuild-fix-imports-plugin';
import { copy as esbuildPluginCopier } from 'esbuild-plugin-copy';
import { esbuildPluginFilePathExtensions } from 'esbuild-plugin-file-path-extensions';
import { esbuildPluginVersionInjector } from 'esbuild-plugin-version-injector';
import { defineConfig, type Options } from 'tsup';

const baseOptions: Options = {
	clean: true,
	splitting: true,
	entry: ['src/**/*.ts', 'src/**/*.mts', 'src/**/*.tsx', 'src/**/*.cts'],
	dts: true,
	minify: true,
	skipNodeModulesBundle: true,
	sourcemap: true,
	platform: 'node',
	target: 'esnext',
	tsconfig: 'tsconfig.json',
	keepNames: true,
	esbuildPlugins: [
		esbuildPluginVersionInjector(),
		esbuildPluginFilePathExtensions(),
		fixImportsPlugin(),
		esbuildPluginCopier(),
	],
	treeshake: true,
};

export default [
	defineConfig({
		...baseOptions,
		outDir: 'lib/esm',
		format: 'esm',
		outExtension: () => ({ js: '.mjs', dts: '.d.mts' }),
	}),
	defineConfig({
		...baseOptions,
		outDir: 'lib/cjs',
		format: 'cjs',
		outExtension: () => ({ js: '.cjs', dts: '.d.cts' }),
	}),
];
