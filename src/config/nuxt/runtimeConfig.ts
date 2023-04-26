import { appEnvironment, appDomain as getAppDomain } from './utils/envVars';

const appDomain = getAppDomain();

if (!appDomain) {
  throw new Error('Environment variable APP_DOMAIN not defined - Please add environment variable to continue');
}

const privateConfig = {
  //
};

const publicConfig = {
  // Anything within this object will be available to all app users via the window.__NUXT__ object.
  // Do not put any sensitive keys or passwords in this object!
  appDomain,
  appEnv: appEnvironment(),
  logLevel: intEnv(process.env.APP_LOG_LEVEL, '1'),
};

export const runtimeConfig = {
  ...privateConfig,
  public: publicConfig,
};

/**
 * Nuxt's config values can only be strings. However, it make sense to use "true" or "false" in config.
 * This function validates that the value provided is the exact string "true" or "false".
 * If it's not, it will instead return the default value "true". This can be modified to "false" per call.
 */
function boolEnv(value?: string, defaultVal = 'true') {
  if (value === 'false' || value === 'true') {
    return value;
  } else {
    return defaultVal;
  }
}

function intEnv(value?: string, defaultVal?: string) {
  if (value) {
    return parseInt(value);
  }

  return defaultVal ? parseInt(defaultVal) : undefined;
}
