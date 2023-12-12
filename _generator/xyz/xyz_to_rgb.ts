// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Rgb, Xyz } from "../../color_formats.ts";
import { clamp } from "../../util.ts";

export function xyzToRgb(...components: Xyz): Rgb {
  const x: number = clamp(components[0], 0.0000, 95.0500) / 100;
  const y: number = clamp(components[1], 0.0000, 100.0000) / 100;
  const z: number = clamp(components[2], 0.0000, 108.9000) / 100;

  const red: number = x * 3.2406 + y * -1.5372 + z * -0.4986;
  const green: number = x * -0.9689 + y * 1.8758 + z * 0.0415;
  const blue: number = x * 0.0557 + y * -0.2040 + z * 1.0570;

  return [red, green, blue].map((n) =>
    n > 0.0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - 0.055 : 12.92 * n
  ).map((n) => n * 255) as Rgb;
}
