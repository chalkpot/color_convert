// Copyright 2023 mineejo. All rights reserved. MIT license.

import { fromFileUrl, join, sep } from "../dev_deps.ts";
import { generateModFile } from "./_/_generate_mod_file.ts";
import { generateConversionFile } from "./_/_generate_conversion_files.ts";
import { copyConversionFiles } from "./_/_copy_conversion_files.ts";
import { FILE_BLACKLIST } from "./_generator_constants.ts";

export function isFileInBlacklist(file: string): boolean {
  return FILE_BLACKLIST.some((regExp: RegExp) => regExp.test(file));
}

const WARNING = `// File generated automatically!\n// Generation script: ${
  `${sep}` + fromFileUrl(import.meta.url).split(sep).slice(-3).join(sep)
}`;

// Usually the code editor allows you to update
// the copyright automatically, so it's easier to take a ready-made
// one from a suitable file than to remember the constant with the copyright.
const thisFileUrl: string[] = fromFileUrl(import.meta.url).split(sep);
const thisFileCopyright: string = (await Deno.readTextFile(
  join(`.${sep}`, thisFileUrl[thisFileUrl.length - 1]),
)).match(/^\/\/.+$/mg)?.[0] ?? "";

export const fileExports: string[] = [`export * from ".${sep}wrap_ansi16.ts"`];

await copyConversionFiles(
  thisFileCopyright,
  `${thisFileCopyright}\n\n${WARNING}`,
);

await generateConversionFile(`${thisFileCopyright}\n\n${WARNING}\n\n`);

await generateModFile(
  `${thisFileCopyright}\n\n${WARNING}\n\n`,
  `${fileExports.join("\n")}`,
);
