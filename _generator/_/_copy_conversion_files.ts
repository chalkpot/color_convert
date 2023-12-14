// Copyright 2023 mineejo. All rights reserved. MIT license.

import { getConversionDirectories } from "./_get_conversion_directories.ts";
import { join } from "https://deno.land/std@0.208.0/path/join.ts";
import { sep } from "https://deno.land/std@0.208.0/path/mod.ts";
import { fileExports, isFileInBlacklist } from "../_generator.ts";
import {
  getRootDirectoryPath,
  getRootFilePath,
  resoleDirectoryExitPath,
} from "../_generator_constants.ts";

async function isFolderEmpty(folderPath: string): Promise<boolean> {
  for await (const _ of Deno.readDir(folderPath)) {
    return false;
  }
  return true;
}

export async function copyConversionFiles(
  comments: string,
  newComments: string,
): Promise<void> {
  try {
    for (const dir of await getConversionDirectories()) {
      if (!await isFolderEmpty(dir)) {
        await Deno.mkdir(getRootDirectoryPath(dir), { recursive: true });
      }

      for await (const entry of Deno.readDir(dir)) {
        if (!entry.isFile) continue;

        const data: Uint8Array = await Deno.readFile(join(dir, entry.name));
        const content: string = resoleDirectoryExitPath(
          new TextDecoder().decode(data),
        ).replace(
          comments,
          newComments,
        );

        if (isFileInBlacklist(entry.name)) continue;
        fileExports.push(`export * from ".${sep}${join(dir, entry.name)}";`);
        await Deno.writeFile(
          getRootFilePath(join(dir, entry.name)),
          new TextEncoder().encode(content),
        );
      }
    }
  } catch (error) {
    console.error(error);
  }
}
