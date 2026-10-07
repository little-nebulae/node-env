export const NODE_ENV = {
  DEVELOPMENT: "development",
  TESTING: "testing",
  STAGING: "staging",
  PRODUCTION: "production",
} as const;

export const ENV_FILE_NAME = {
  DEFAULT: ".env",
  LOCAL: ".env.local",
} as const;
