import type { Except, LiteralUnion, ValueOf } from "type-fest";

import {
  composeErrorMessage,
  isError,
  UnexpectedError,
} from "@little-nebulae/error";
import {
  isNodeErrnoException,
  isNodeNoEntrySystemErrorCause,
  NodeNoEntrySystemError,
} from "@little-nebulae/node-errors";
import { attempt } from "@little-nebulae/result";
import { join } from "node:path";
import { cwd, loadEnvFile } from "node:process";

import type { ENV_FILE_ENUM } from "@/constants";

export type EnvFileName = LiteralUnion<
  | ValueOf<Except<typeof ENV_FILE_ENUM, "LOCAL">>
  | ValueOf<typeof ENV_FILE_ENUM.LOCAL>,
  string
>;

export function nodeLoadEnvFile({
  parentDirPath = cwd(),
  envFileName = ".env.local",
}: {
  parentDirPath?: string;
  envFileName?: EnvFileName;
}) {
  const path = join(parentDirPath, envFileName);
  return attempt({
    tryFn: () => loadEnvFile(path),
    catchFn: (error) => {
      const operation = "load dot env file";
      const meta = { path };
      if (isError(error) && isNodeErrnoException(error)) {
        if (isNodeNoEntrySystemErrorCause(error)) {
          return new NodeNoEntrySystemError({ cause: error });
        }
      }
      return new UnexpectedError({
        message: composeErrorMessage({ operation }),
        cause: error,
        meta,
      });
    },
  });
}
