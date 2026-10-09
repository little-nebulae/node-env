export const NODE_ENV_KEY = "NODE_ENV";
export const NODE_ENV_VALUE = {
  DEVELOPMENT: "development",
  TESTING: "testing",
  STAGING: "staging",
  PRODUCTION: "production",
} as const;

export const ENV_FILE_NAME = {
  DEFAULT: ".env",
  LOCAL: ".env.local",
} as const;
