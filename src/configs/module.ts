import { copy as esbuildPluginCopier } from 'esbuild-plugin-copy';
import { esbuildPluginFilePathExtensions } from 'esbuild-plugin-file-path-extensions';
import { esbuildPluginVersionInjector } from 'esbuild-plugin-version-injector';
import { defineConfig, type Options } from 'tsup';

import type { PluginConfiguration } from '../types';
import { base } from './base';

export const options: Options = {
	...base,
	outDir: 'dist',
	format: 'esm',
	outExtension: () => ({ js: '.mjs', dts: '.d.mts' }),
};

export function buildOptions(opts?: Options, pluginOpts?: PluginConfiguration) {
	return defineConfig({
		...options,
		...opts,
		esbuildPlugins: [
			...((opts ?? {}).esbuildPlugins || []),
			...(options.esbuildPlugins || []),
			esbuildPluginVersionInjector((pluginOpts ?? {}).pluginVersionInjector),
			esbuildPluginFilePathExtensions((pluginOpts ?? {}).pluginFilePathExtensions),
			esbuildPluginCopier((pluginOpts ?? {}).pluginCopier),
		],
	});
}
