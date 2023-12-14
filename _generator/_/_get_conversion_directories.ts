// Copyright 2023 mineejo. All rights reserved. MIT license.

import {
  CONVERSION_DIR,
  DIRECTORY_BLACKLIST,
} from "../_generator_constants.ts";

function isDirectoryInBlacklist(directory: string): boolean {
  return DIRECTORY_BLACKLIST.some((regExp: RegExp) => regExp.test(directory));
}

export async function getConversionDirectories(): Promise<string[]> {
  const dirs: string[] = [];

  try {
    for await (const entry of Deno.readDir(CONVERSION_DIR)) {
      if (entry.isDirectory && !isDirectoryInBlacklist(entry.name)) {
        dirs.push(entry.name);
      }
    }
  } catch (error) {
    console.error(error);
  }

  return dirs;
}
