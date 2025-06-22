import type { Plugin } from 'esbuild';
import { fixImportsPlugin } from 'esbuild-fix-imports-plugin';
import { copy as esbuildPluginCopier } from 'esbuild-plugin-copy';
import { esbuildPluginFilePathExtensions } from 'esbuild-plugin-file-path-extensions';
import { esbuildPluginVersionInjector } from 'esbuild-plugin-version-injector';

export const plugins: Array<Plugin> = [
	esbuildPluginVersionInjector(),
	esbuildPluginFilePathExtensions(),
	fixImportsPlugin(),
	esbuildPluginCopier(),
];
