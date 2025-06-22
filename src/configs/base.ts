import { copy as esbuildPluginCopier } from 'esbuild-plugin-copy';
import { esbuildPluginFilePathExtensions } from 'esbuild-plugin-file-path-extensions';
import { esbuildPluginVersionInjector } from 'esbuild-plugin-version-injector';
import { defineConfig, type Options } from 'tsup';

import type { PluginConfiguration } from '../types';
import { plugins } from '../plugins';

export const base: Options = {
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
	esbuildPlugins: plugins,
	treeshake: true,
};

export function buildOptions(opts: Options, pluginOpts: PluginConfiguration) {
	return defineConfig({
		...base,
		...opts,
		esbuildPlugins: [
			...(opts.esbuildPlugins || []),
			...(base.esbuildPlugins || []),
			esbuildPluginVersionInjector(pluginOpts.pluginVersionInjector),
			esbuildPluginFilePathExtensions(pluginOpts.pluginFilePathExtensions),
			esbuildPluginCopier(pluginOpts.pluginCopier),
		],
	});
}
