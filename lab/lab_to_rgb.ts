// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts



import { Lab, Rgb } from "../color_formats.ts";
import { xyzToRgb } from "../xyz/xyz_to_rgb.ts";
import { clamp } from "../util.ts";

export function labToRgb(...components: Lab): Rgb {
  const l: number = clamp(components[0], 0, 100);
  const a: number = clamp(components[1], -86.185, 98.254);
  const b: number = clamp(components[2], -107.863, 94.482);

  let y: number = (l + 16) / 116;
  let x: number = a / 500 + y;
  let z: number = y - b / 200;

  [x, y, z] = [x, y, z].map((n) =>
    Math.pow(n, 3) > 0.008856 ? Math.pow(n, 3) : (n - 16 / 116) / 7.787
  );

  return xyzToRgb(x * 95.047, y * 100.000, z * 108.883);
}
