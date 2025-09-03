import { noConsoleCustomPluginRule, noConsoleRule } from './no-console-log.js';

export const customPluginsRules = {
  ...noConsoleCustomPluginRule,
};

export const customRules = {
  ...noConsoleRule,
};
