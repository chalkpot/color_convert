// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Cmy, Rgb } from "../color_formats.ts";
import { clamp } from "../util.ts";

export function rgbToCmy(...components: Rgb): Cmy {
  const red: number = clamp(components[0], 0, 255);
  const green: number = clamp(components[1], 0, 255);
  const blue: number = clamp(components[2], 0, 255);

  const cyan: number = (255 - red) / 255;
  const magenta: number = (255 - green) / 255;
  const yellow: number = (255 - blue) / 255;

  return [cyan * 100, magenta * 100, yellow * 100];
}
