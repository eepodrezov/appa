import bestPractices from './best-practices.js';
import style from './style.js';
import react from './react.js';
import { customPluginsRules, customRules } from './custom/index.js';
import prettier from './prettier.js';

export const rules = {
  ...bestPractices,
  ...style,
  ...react,
  ...prettier,
  ...customRules,
  ...customRules,
};

export { customPluginsRules };
