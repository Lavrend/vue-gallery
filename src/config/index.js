import configApp from './appConfig';
import configLangs from './langs/configLangs';

const config = Object.assign({},
  configApp,
  configLangs);

export default config;
