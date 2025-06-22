import { options as commonOptions } from './configs/common';
import { options as moduleOptions } from './configs/module';

import { defineConfig } from 'tsup';

export * from './types';

export const commonJsConfiguration = [defineConfig(commonOptions)];
export const moduleJsConfiguration = [defineConfig(moduleOptions)];
export const packageConfiguration = [...commonJsConfiguration, ...moduleJsConfiguration];
export const esmProjectConfiguration = [...moduleJsConfiguration];
export const commonJsProjectConfiguration = [...commonJsConfiguration];

export { base as baseOptions, buildOptions as buildOptions } from './configs/base';
export { buildOptions as buildCommonJsOptions, options as commonJsOptions } from './configs/common';
export { buildOptions as buildModuleJsOptions, options as moduleJsOptions } from './configs/module';
