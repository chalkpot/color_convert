// Copyright 2023 mineejo. All rights reserved. MIT license.

import { getConversionDirectories } from "./_get_conversion_directories.ts";
import { fileExports, isFileInBlacklist } from "../_generator.ts";

async function isEmptyDirectory(folderPath: string): Promise<boolean> {
  // noinspection LoopStatementThatDoesntLoopJS
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
    for (const directory of await getConversionDirectories()) {
      if (!await isEmptyDirectory(directory)) {
        await Deno.mkdir(`../${directory}`, { recursive: true });
      }

      for await (const entry of Deno.readDir(directory)) {
        if (!entry.isFile || isFileInBlacklist(entry.name)) continue;

        fileExports.push(`export * from "./${directory}/${entry.name}";`);

        const fileData: Uint8Array = await Deno.readFile(
          `${directory}/${entry.name}`,
        );

        const fileContent: string = new TextDecoder().decode(fileData)
          .replace(/(\.\.\/)+/mg, "../")
          .replace(comments, newComments);

        await Deno.writeFile(
          `../${directory}/${entry.name}`,
          new TextEncoder().encode(fileContent),
        );
      }
    }
  } catch (error) {
    console.error(error);
  }
}
