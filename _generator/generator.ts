// Copyright 2023 mineejo. All rights reserved. MIT license.

import { exists, fromFileUrl, join, sep } from "../dev_deps.ts";

const ROOT_FILE = "deno.jsonc";
const ROOT_DIR = "../";

const CURRENT_DIR = `.${sep}`;

const FILE_SEPARATOR = "_to_";
const FILE_EXTENSION = ".ts";

const BLACK_LIST_FILES: RegExp[] = [/_test\.ts/];

const MOD_EXPORTS: string[] = [`export * from ".${sep}wrap_ansi16.ts"`];

const MAIN_MODEL = "rgb";

const WARNING = `// File generated automatically!\n// Generation script: ${
  `${sep}` + fromFileUrl(import.meta.url).split(sep).slice(-3).join(sep)
}`;

async function isFolderEmpty(folderPath: string): Promise<boolean> {
  for await (const _ of Deno.readDir(folderPath)) {
    return false;
  }
  return true;
}

function fileInBlacklist(file: string): boolean {
  return BLACK_LIST_FILES.some((regExp) => regExp.test(file));
}

function capitalize(string: string) {
  return string[0].toUpperCase() + string.slice(1);
}

function dirToFile(unfinishedDir: string, dir: string): string {
  return `${unfinishedDir}${FILE_SEPARATOR}${dir}${FILE_EXTENSION}`;
}

function fileToDir(unfinishedFile: string): string[] {
  const tempSeparator = " ";
  const regExp = new RegExp(`\\W.+${FILE_SEPARATOR}`, "gmi");
  return unfinishedFile
    .replaceAll(regExp, tempSeparator)
    .replace(FILE_EXTENSION, "")
    .split(tempSeparator);
}

// Usually the code editor allows you to update
// the copyright automatically, so it's easier to take a ready-made
// one from a suitable file than to remember the constant with the copyright.
const thisFileUrl: string[] = fromFileUrl(import.meta.url).split(sep);
const thisFileCopyright: string = (await Deno.readTextFile(
  join(CURRENT_DIR, thisFileUrl[thisFileUrl.length - 1]),
)).match(/^\/\/.+$/mg)?.[0] ?? "";

// Checking for the root folder where deno.json or deno.jsonc should be located.
if (!await exists(join(ROOT_DIR, CURRENT_DIR, ROOT_FILE))) {
  console.error(`The root directory "${join(ROOT_DIR, CURRENT_DIR)}" is not!`);
  Deno.exit(1);
}

// Getting catalogs with color model names, etc.
const dirs: string[] = [];

try {
  for await (const entry of Deno.readDir(CURRENT_DIR)) {
    if (entry.isDirectory) dirs.push(entry.name);
  }
} catch (error) {
  console.error(error);
}

// Moving directories with files to the root folder.
const fileExports: string[] = [...MOD_EXPORTS];

try {
  for (const dir of dirs) {
    if (!await isFolderEmpty(dir)) {
      await Deno.mkdir(join(ROOT_DIR, dir), { recursive: true });
    }

    for await (const entry of Deno.readDir(dir)) {
      if (!entry.isFile) continue;

      let data: Uint8Array = await Deno.readFile(join(dir, entry.name));
      let text: string = new TextDecoder().decode(data);

      // Unreliable, but it works to overwrite paths of recreated files.
      text = text.replace(/(\.\.\/)+/mg, ROOT_DIR).replace(
        thisFileCopyright,
        `${thisFileCopyright}\n\n` + `${WARNING}`,
      );

      data = new TextEncoder().encode(text);

      if (fileInBlacklist(entry.name)) continue;
      fileExports.push(`export * from ".${sep}${join(dir, entry.name)}";`);
      await Deno.writeFile(join(ROOT_DIR, dir, entry.name), data);
    }
  }
} catch (error) {
  console.error(error);
}

// Unfinished directories that are missing conversions.
const unfinishedDirs: string[] = [];

try {
  for (const dir of dirs) {
    const dirCount: number = dirs.filter((x: string) => x !== dir).length;
    let fileCount = 0;

    for await (const entry of Deno.readDir(dir)) {
      if (entry.isFile && !fileInBlacklist(entry.name)) fileCount++;
    }

    if (dirCount !== fileCount) {
      unfinishedDirs.push(dir);
    }
  }
} catch (error) {
  console.error(error);
}

const files: string[] = [];
try {
  for (const unfinishedDir of unfinishedDirs) {
    for (const modelDir of dirs) {
      if (unfinishedDir === modelDir) continue;

      const filePath: string = join(
        unfinishedDir,
        dirToFile(unfinishedDir, modelDir),
      );

      if (!await exists(filePath)) files.push(filePath);
    }
  }
} catch (error) {
  console.error(error);
}

try {
  for (const file of files) {
    const [model, toModel]: string[] = fileToDir(file);

    if (
      !await exists(
        join(model, `${model}${FILE_SEPARATOR}${MAIN_MODEL}${FILE_EXTENSION}`),
      )
    ) continue;

    if (
      !await exists(
        join(
          `${MAIN_MODEL}`,
          `${MAIN_MODEL}${FILE_SEPARATOR}${toModel}${FILE_EXTENSION}`,
        ),
      )
    ) continue;

    const data: Uint8Array = new TextEncoder().encode(
      `${thisFileCopyright}\n\n` +
        `${WARNING}\n\n` +
        `import { ${capitalize(model)}, ${
          capitalize(toModel)
        } } from "../color_formats.ts";\n` +
        // ...
        `import { ${model}To${
          capitalize(MAIN_MODEL)
        } } from "./${model}_to_${MAIN_MODEL}.ts";\n` +
        // ...
        `import { ${MAIN_MODEL}To${
          capitalize(toModel)
        } } from "../${MAIN_MODEL}/${MAIN_MODEL}_to_${toModel}.ts";\n\n` +
        // ...
        `export function ${model}To${capitalize(toModel)}(...components: ${
          capitalize(model)
        }): ${capitalize(toModel)} {\n` +
        `  return ${MAIN_MODEL}To${capitalize(toModel)}(...${model}To${
          capitalize(MAIN_MODEL)
        }(...components));\n` +
        "}",
    );

    if (fileInBlacklist(file)) continue;
    fileExports.push(`export * from ".${sep}${file}";`);
    await Deno.writeFile(join(ROOT_DIR, file), data);
  }
} catch (error) {
  console.error(error);
}

const INDEX_FILE = "mod.ts";

try {
  await Deno.writeFile(
    join(ROOT_DIR, INDEX_FILE),
    new TextEncoder().encode(
      `${thisFileCopyright}\n\n` + `${WARNING}\n\n` +
        "/**\n" +
        " * Color convert is a set of conversion functions and automated\n" +
        " * conversions of color models and formats.\n" +
        " *\n" +
        " * @module\n" +
        " */\n\n" +
        fileExports.join("\n"),
    ),
  );
} catch (error) {
  console.error(error);
}
