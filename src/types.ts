import type { Options as PluginCopyOptions } from 'esbuild-plugin-copy';
import type { PluginOptions as PluginFilePathExtensionsOptions } from 'esbuild-plugin-file-path-extensions';
import type { PluginOptions as PluginVersionInjectorOptions } from 'esbuild-plugin-version-injector';

interface PluginConfiguration {
	pluginVersionInjector?: PluginVersionInjectorOptions;
	pluginFilePathExtensions?: PluginFilePathExtensionsOptions;
	pluginCopier?: Partial<PluginCopyOptions>;
}

export type { PluginConfiguration };
