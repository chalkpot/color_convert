// Copyright 2023 mineejo. All rights reserved. MIT license.

import { fromFileUrl, sep } from "../dev_deps.ts";
import { generateModFile } from "./_/_generate_mod_file.ts";
import { generateConversionFile } from "./_/_generate_conversion_files.ts";
import { copyConversionFiles } from "./_/_copy_conversion_files.ts";

export const FILE_BLACKLIST: RegExp[] = [/_test\.ts/, /^_/gm];
export const DIRECTORY_BLACKLIST: RegExp[] = [/^_/gm];

export function isFileInBlacklist(file: string): boolean {
  return FILE_BLACKLIST.some((regExp: RegExp) => regExp.test(file));
}

// Usually the code editor allows you to update
// the copyright automatically, so it's easier to take a ready-made
// one from a suitable file than to remember the constant with the copyright.
const thisFileUrl: string[] = fromFileUrl(import.meta.url).split(sep);
console.log(`./${thisFileUrl[thisFileUrl.length - 1]}`);
const thisFileCopyright: string =
  (await Deno.readTextFile(`./${thisFileUrl[thisFileUrl.length - 1]}`)).match(
    /^\/\/.+$/mg,
  )?.[0] ?? "";

const WARNING = `// File generated automatically!\n// Generation script: ${
  "/" + thisFileUrl.slice(-3).join("/")
}`;

export const fileExports: string[] = [`export * from "./wrap_ansi16.ts"`];

await copyConversionFiles(
  thisFileCopyright,
  `${thisFileCopyright}\n\n${WARNING}`,
);

await generateConversionFile(`${thisFileCopyright}\n\n${WARNING}\n\n`);

await generateModFile(
  `${thisFileCopyright}\n\n${WARNING}\n\n`,
  `${fileExports.join("\n")}`,
);
