// Copyright 2023 mineejo. All rights reserved. MIT license.

import { createRgbColors, createRgbGrays } from "../../util.ts";
import { assertEquals } from "../../dev_deps.ts";
import { rgbToAnsi256 } from "./rgb_to_ansi256.ts";

export function print256Colors(colorCodes: number[][]): void {
  console.log(
    colorCodes.map((code: number[]): string => {
      return `\x1b[48;5;${code[0]}m  ${code[0]}  \x1b[49m`;
    }).join(""),
  );
}

Deno.test("convert RGB to ANSI256", async (t) => {
  await t.step("convert base colors", () => {
    assertEquals(
      [
        rgbToAnsi256(0, 0, 0),
        rgbToAnsi256(255, 0, 0),
        rgbToAnsi256(0, 255, 0),
        rgbToAnsi256(0, 0, 255),
        rgbToAnsi256(255, 255, 255),
      ],
      [[16], [196], [46], [21], [231]],
    );
  });

  const grayscale: number[][] = createRgbGrays().map((color) =>
    rgbToAnsi256(...color)
  );

  await t.step("convert gray scale", () => {
    assertEquals(
      [...grayscale],
      [
        [232],
        [233],
        [234],
        [235],
        [236],
        [237],
        [238],
        [239],
        [240],
        [241],
        [242],
        [243],
        [244],
        [245],
        [246],
        [247],
        [248],
        [249],
        [250],
        [251],
        [252],
        [253],
        [254],
        [255],
      ],
    );
  });

  const colors: number[][] = createRgbColors().map((color) =>
    rgbToAnsi256(...color)
  );

  await t.step("convert without duplicates", () => {
    assertEquals(
      [
        colors.length - [...new Set(colors)].length,
        grayscale.length - [...new Set(grayscale)].length,
      ],
      [0, 0],
    );
  });

  await t.step("convert 256 colors without system colors", () => {
    assertEquals([colors.length + grayscale.length], [240]);
  });

  const grays: number[][] = [];
  for (let color = 0; color <= 255; color += 1) {
    grays.push(rgbToAnsi256(color, color, color));
  }

  print256Colors(colors);
  print256Colors(grayscale);
  print256Colors(grays);
});
