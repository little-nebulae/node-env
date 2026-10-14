import type { LiteralUnion, ValueOf } from "type-fest";

import { composeErrorMessage, UnexpectedError } from "@little-nebulae/error";
import { attempt } from "@little-nebulae/result";
import {
  isErrnoException,
  NoEntrySystemError,
} from "@little-nebulae/system-error";
import { join } from "node:path";
import { cwd, loadEnvFile } from "node:process";

import type { ENV_FILE_NAME } from "@/constants";

export function loadDotEnvFile({
  parentDirPath = cwd(),
  envFileName = ".env.local",
}: {
  parentDirPath?: string;
  envFileName?: LiteralUnion<ValueOf<typeof ENV_FILE_NAME>, string>;
}) {
  const path = join(parentDirPath, envFileName);
  return attempt({
    tryFn: () => loadEnvFile(path),
    catchFn: (error) => {
      const operation = "load dot env file";
      const meta = { path };
      if (isErrnoException(error)) {
        return new NoEntrySystemError({
          message: composeErrorMessage({
            operation,
            reason: `${path} doesn't exist or it's a dangling symbolic link.`,
          }),
          cause: error,
          meta,
        });
      }
      return new UnexpectedError({
        message: composeErrorMessage({ operation }),
        cause: error,
        meta,
      });
    },
  });
}
