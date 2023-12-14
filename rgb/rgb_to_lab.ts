// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Lab, Rgb, Xyz } from "../color_formats.ts";
import { rgbToXyz } from "./rgb_to_xyz.ts";

export function rgbToLab(...components: Rgb): Lab {
  let [x, y, z]: Xyz = rgbToXyz(...components);

  [x, y, z] = [x / 95.047, y / 100.000, z / 108.883].map((a) =>
    a > 0.008856 ? Math.pow(a, 1 / 3) : (7.787 * a) + (16 / 116)
  );

  const l: number = (116 * y) - 16;
  const a: number = 500 * (x - y);
  const b: number = 200 * (y - z);

  return [l, a, b];
}
