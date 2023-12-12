// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Cmyk, Rgb } from "../../color_formats.ts";
import { percent } from "../../util.ts";

export function cmykToRgb(...components: Cmyk): Rgb {
  const cyan: number = percent(components[0]) / 100;
  const magenta: number = percent(components[1]) / 100;
  const yellow: number = percent(components[2]) / 100;
  const key: number = percent(components[3]) / 100;

  return [
    255 * (1 - cyan) * (1 - key),
    255 * (1 - magenta) * (1 - key),
    255 * (1 - yellow) * (1 - key),
  ];
}
