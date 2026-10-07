import type { ValueOf } from "type-fest";

import type { NODE_ENV } from "@/constants";

export type NodeEnv = ValueOf<typeof NODE_ENV>;
