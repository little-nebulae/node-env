import { z } from "zod";

import { NODE_ENV_ENUM } from "@/constants";

export const NodeEnvSchema = z.object({
  NODE_ENV: z.enum(NODE_ENV_ENUM.VALUE),
});
export type NodeEnv = z.infer<typeof NodeEnvSchema>;
