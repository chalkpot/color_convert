// Copyright 2023 mineejo. All rights reserved. MIT license.

import { getConversionGenerationDirectories } from "./_get_conversion_generation_directories.ts";
import { getConversionDirectories } from "./_get_conversion_directories.ts";
import { exists } from "../../dev_deps.ts";

function generationDirectoryToFile(
  generationDirectory: string,
  directory: string,
): string {
  return `${generationDirectory}_to_${directory}.ts`;
}

export async function getConversionFiles(): Promise<string[]> {
  const files: string[] = [];

  try {
    for (
      const generationDirectory of await getConversionGenerationDirectories()
    ) {
      for (const directory of await getConversionDirectories()) {
        if (generationDirectory === directory) continue;

        const filePath = `${generationDirectory}/${
          generationDirectoryToFile(generationDirectory, directory)
        }`;

        if (!await exists(filePath)) files.push(filePath);
      }
    }
  } catch (error) {
    console.error(error);
  }

  return files;
}
