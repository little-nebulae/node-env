export const NODE_ENV_ENUM = {
  KEY: "NODE_ENV",
  VALUE: {
    DEVELOPMENT: "development",
    TESTING: "testing",
    STAGING: "staging",
    PRODUCTION: "production",
  },
} as const;

export const ENV_FILE_ENUM = {
  DEFAULT: ".env",
  EXAMPLE: ".env.example",
  DEVELOPMENT: ".env.development",
  TESTING: ".env.testing",
  STAGING: ".env.staging",
  PRODUCTION: ".env.production",
  LOCAL: {
    DEFAULT: ".env.local",
    DEVELOPMENT: ".env.development.local",
    TESTING: ".env.testing.local",
    STAGING: ".env.staging.local",
    PRODUCTION: ".env.production.local",
  },
} as const;
