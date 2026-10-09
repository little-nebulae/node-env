import type { ValueOf } from "type-fest";

import type { NODE_ENV_KEY, NODE_ENV_VALUE } from "@/constants";

export type NodeEnvValue = ValueOf<typeof NODE_ENV_VALUE>;

export interface NodeEnv {
  [NODE_ENV_KEY]: NodeEnvValue;
}
