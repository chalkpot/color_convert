// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Rgb, Xyz } from "../color_formats.ts";
import { clamp } from "../util.ts";

export function rgbToXyz(...components: Rgb): Xyz {
  const [red, green, blue]: Rgb = components
    .map((x) => clamp(x, 0, 255) / 255)
    .map((x) => x > 0.04045 ? Math.pow((x + 0.055) / 1.055, 2.4) : x / 12.92)
    .map((x) => x * 100) as Rgb;

  const x: number = red * 0.4124 + green * 0.3576 + blue * 0.1805;
  const y: number = red * 0.2126 + green * 0.7152 + blue * 0.0722;
  const z: number = red * 0.0193 + green * 0.1192 + blue * 0.9505;

  return [x, y, z];
}
