import { z } from "zod";

import { NODE_ENV_KEY, NODE_ENV_VALUE } from "@/constants";

export const NodeEnvSchema = z.object({
  [NODE_ENV_KEY]: z.enum([
    NODE_ENV_VALUE.DEVELOPMENT,
    NODE_ENV_VALUE.TESTING,
    NODE_ENV_VALUE.STAGING,
    NODE_ENV_VALUE.PRODUCTION,
  ]),
});
export type NodeEnv = z.infer<typeof NodeEnvSchema>;
