// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Cmy, Rgb } from "../color_formats.ts";
import { percent } from "../util.ts";

export function cmyToRgb(...components: Cmy): Rgb {
  const cyan: number = percent(components[0]) / 100;
  const magenta: number = percent(components[1]) / 100;
  const yellow: number = percent(components[2]) / 100;

  return [(1 - cyan) * 255, (1 - magenta) * 255, (1 - yellow) * 255];
}
