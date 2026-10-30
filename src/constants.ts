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
  LOCAL: ".env.local",
  EXAMPLE: ".env.example",
} as const;
