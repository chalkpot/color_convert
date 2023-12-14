// Copyright 2023 mineejo. All rights reserved. MIT license.

import { exists } from "../../dev_deps.ts";
import { fileExports, isFileInBlacklist } from "../_generator.ts";
import { getConversionFiles } from "./_get_conversion_files.ts";

function up(string: string) {
  return string[0].toUpperCase() + string.slice(1);
}

function generationFileToDirectory(generationFile: string): string[] {
  const tempSeparator = " ";
  const regExp = new RegExp(`\\W.+_to_`, "gmi");
  return generationFile
    .replaceAll(regExp, tempSeparator)
    .replace(".ts", "")
    .split(tempSeparator);
}

export async function generateConversionFile(comments: string): Promise<void> {
  try {
    for (const file of await getConversionFiles()) {
      if (isFileInBlacklist(file)) continue;

      const [model, toModel]: string[] = generationFileToDirectory(file);
      if (!await exists(`${model}/${model}_to_rgb.ts`)) continue;
      if (!await exists(`rgb/rgb_to_${toModel}.ts`)) continue;

      // deno-fmt-ignore
      const data: Uint8Array = new TextEncoder().encode(
        comments +
          `import { ${up(model)}, ${up(toModel)} } from "../color_formats.ts";\n` +
          `import { ${model}To${up("Rgb")} } from "./${model}_to_rgb.ts";\n` +
          `import { rgbTo${up(toModel)} } from "../rgb/rgb_to_${toModel}.ts";\n\n` +
          `export function ${model}To${up(toModel)}(...components: ${up(model)}): ${up(toModel)} {\n` +
          `  return rgbTo${up(toModel)}(...${model}To${up("Rgb")}(...components));\n` +
          "}",
      );

      fileExports.push(`export * from "./${file}";`);

      await Deno.writeFile(`../${file}`, data);
    }
  } catch (error) {
    console.error(error);
  }
}
