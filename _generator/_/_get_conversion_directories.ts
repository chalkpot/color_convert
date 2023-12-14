// Copyright 2023 mineejo. All rights reserved. MIT license.

import { DIRECTORY_BLACKLIST } from "../_generator.ts";

function isDirectoryInBlacklist(directory: string): boolean {
  return DIRECTORY_BLACKLIST.some((regExp: RegExp) => regExp.test(directory));
}

export async function getConversionDirectories(): Promise<string[]> {
  const directories: string[] = [];

  try {
    for await (const entry of Deno.readDir("./")) {
      if (entry.isDirectory && !isDirectoryInBlacklist(entry.name)) {
        directories.push(entry.name);
      }
    }
  } catch (error) {
    console.error(error);
  }

  return directories;
}
