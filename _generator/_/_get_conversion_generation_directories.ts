// Copyright 2023 mineejo. All rights reserved. MIT license.

import { getConversionDirectories } from "./_get_conversion_directories.ts";
import { isFileInBlacklist } from "../_generator.ts";

function removeElementArrayByValue(array: unknown[], value: unknown) {
  return [...array].filter((x: unknown) => x !== value);
}

export async function getConversionGenerationDirectories(): Promise<string[]> {
  const directories: string[] = await getConversionDirectories();
  const generationDirectories: string[] = [];

  try {
    for (const directory of directories) {
      const directoryCount: number =
        removeElementArrayByValue(directories, directory).length;

      let fileCount = 0;
      for await (const entry of Deno.readDir(directory)) {
        if (entry.isFile && !isFileInBlacklist(entry.name)) fileCount++;
      }

      if (directoryCount !== fileCount) generationDirectories.push(directory);
    }
  } catch (error) {
    console.error(error);
  }

  return generationDirectories;
}
