// Copyright 2023 mineejo. All rights reserved. MIT license.

import { MOD_FILE } from "../_generator_constants.ts";

export async function generateModFile(
  comments: string,
  content: string,
): Promise<void> {
  try {
    await Deno.writeFile(
      MOD_FILE,
      new TextEncoder().encode(
        comments +
          "/**\n" +
          " * Color convert is a set of conversion functions and automated\n" +
          " * conversions of color models and formats.\n" +
          " *\n" +
          " * @module\n" +
          " */\n\n" +
          content,
      ),
    );
  } catch (error) {
    console.error(error);
  }
}
