// Copyright 2023 mineejo. All rights reserved. MIT license.

import { exists, join, sep } from "../../dev_deps.ts";
import { fileExports, isFileInBlacklist } from "../_generator.ts";
import { getConversionFiles } from "./_get_conversion_files.ts";
import {
  FILE_EXTENSION,
  FILE_SEPARATOR,
  getRootFilePath,
  MAIN_COLOR_MODEL,
} from "../_generator_constants.ts";

function capitalize(string: string) {
  return string[0].toUpperCase() + string.slice(1);
}

function generationFileToDirectory(generationFile: string): string[] {
  const tempSeparator = " ";
  const regExp = new RegExp(`\\W.+${FILE_SEPARATOR}`, "gmi");
  return generationFile
    .replaceAll(regExp, tempSeparator)
    .replace(FILE_EXTENSION, "")
    .split(tempSeparator);
}

export async function generateConversionFile(comments: string): Promise<void> {
  try {
    for (const file of await getConversionFiles()) {
      const [colorModel, toColorModel]: string[] = generationFileToDirectory(
        file,
      );

      if (
        !await exists(
          join(
            colorModel,
            `${colorModel}${FILE_SEPARATOR}${MAIN_COLOR_MODEL}${FILE_EXTENSION}`,
          ),
        )
      ) continue;

      if (
        !await exists(
          join(
            `${MAIN_COLOR_MODEL}`,
            `${MAIN_COLOR_MODEL}${FILE_SEPARATOR}${toColorModel}${FILE_EXTENSION}`,
          ),
        )
      ) continue;

      const data: Uint8Array = new TextEncoder().encode(
        comments +
          `import { ${capitalize(colorModel)}, ${
            capitalize(toColorModel)
          } } from "../color_formats.ts";\n` +
          `import { ${colorModel}To${
            capitalize(MAIN_COLOR_MODEL)
          } } from "./${colorModel}_to_${MAIN_COLOR_MODEL}.ts";\n` +
          `import { ${MAIN_COLOR_MODEL}To${
            capitalize(toColorModel)
          } } from "../${MAIN_COLOR_MODEL}/${MAIN_COLOR_MODEL}_to_${toColorModel}.ts";\n\n` +
          `export function ${colorModel}To${
            capitalize(toColorModel)
          }(...components: ${capitalize(colorModel)}): ${
            capitalize(toColorModel)
          } {\n` +
          `  return ${MAIN_COLOR_MODEL}To${
            capitalize(toColorModel)
          }(...${colorModel}To${
            capitalize(MAIN_COLOR_MODEL)
          }(...components));\n` +
          "}",
      );

      if (isFileInBlacklist(file)) continue;
      fileExports.push(`export * from ".${sep}${file}";`);
      await Deno.writeFile(getRootFilePath(file), data);
    }
  } catch (error) {
    console.error(error);
  }
}
