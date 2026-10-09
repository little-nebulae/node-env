import type { ValueOf } from "type-fest";

import type { NODE_ENV_KEY, NODE_ENV_VALUE } from "@/constants";

export type NodeEnvValue = ValueOf<typeof NODE_ENV_VALUE>;
export type NodeEnvKey = typeof NODE_ENV_KEY;
export type NodeEnv = {
  [K in NodeEnvKey]: NodeEnvValue;
};
