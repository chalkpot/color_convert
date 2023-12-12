// Copyright 2023 mineejo. All rights reserved. MIT license.

import { ansi256ToRgb } from "./ansi256_to_rgb.ts";
import { assertEquals } from "../../dev_deps.ts";
import { createRgbColors, createRgbGrays } from "../../util.ts";

export function printRgbColors(
  colorBrightness: number[][],
): void {
  console.log(
    colorBrightness.map((brightness: number[]): string => {
      return `\x1b[48;2;${brightness[0]};${brightness[1]};${brightness[2]}m  ${
        brightness[0]
      }, ${brightness[1]}, ${brightness[2]}  \x1b[49m`;
    }).join(""),
  );
}

Deno.test("convert ANSI256 to RGB", async (t) => {
  const colors: number[][] = [];
  for (let i = 16; i <= 231; i++) colors.push([...ansi256ToRgb(i)]);

  await t.step("convert colors from 16 to 231", () => {
    assertEquals([...createRgbColors()], [...colors]);
  });

  const grays: number[][] = [];
  for (let i = 232; i <= 255; i++) grays.push([...ansi256ToRgb(i)]);

  await t.step("convert grays from 232 to 255", () => {
    assertEquals([...createRgbGrays()], [...grays]);
  });

  printRgbColors(colors);
  printRgbColors(grays);
});
