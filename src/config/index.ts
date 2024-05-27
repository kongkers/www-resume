import { load } from 'js-yaml';
import fs from 'fs';
import path from 'path';
import nconf from 'nconf';
import { mergeDeepRight } from 'ramda';
import { logger } from '../server/logger/index.js';

const pathToConfigDir = path.join(process.cwd(), '/src/config');
let { NODE_ENV } = process.env;

const loadEnvConfig = () => {
	if (!NODE_ENV) {
		logger.info('NODE_ENV not defined! Defaulting to NODE_ENV=local');
		NODE_ENV = 'local';
	}
  const pathToEnvConfigFile = path.join(pathToConfigDir, `${NODE_ENV}.yaml`);
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  if(fs.existsSync(pathToEnvConfigFile)) {
    // eslint-disable-next-line security/detect-non-literal-fs-filename
    const envConfig: string = fs.readFileSync(pathToEnvConfigFile, 'utf8');
    return load(envConfig) as object;
  }
  return {};
}

const loadDefaultConfig = ():object => {
  const pathToDefaultsFile = path.join(pathToConfigDir, 'defaults.yaml');
  if(fs.existsSync(pathToDefaultsFile)) {
    const defaultConfig:string = fs.readFileSync(pathToDefaultsFile, 'utf8');
    return load(defaultConfig) as object;
  }
  return {};
}

export const loadConfig = () => {
  logger.info('Loading configuration...');
  const defaultConfig = loadDefaultConfig();
  const envConfig = loadEnvConfig();

  nconf.env({
    separator: '__',
    parseValues: true,
  }).defaults(mergeDeepRight(defaultConfig, envConfig));


  logger.info('Configuration loaded successfully...');
}
