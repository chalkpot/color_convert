// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts



import { Cmyk, Rgb } from "../color_formats.ts";
import { clamp } from "../util.ts";

export function rgbToCmyk(...components: Rgb): Cmyk {
  const red: number = clamp(components[0], 0, 255) / 255;
  const green: number = clamp(components[1], 0, 255) / 255;
  const blue: number = clamp(components[2], 0, 255) / 255;

  let cyan: number = 1 - red;
  let magenta: number = 1 - green;
  let yellow: number = 1 - blue;
  const key: number = Math.min(cyan, magenta, yellow);

  cyan = (cyan - key) / (1 - key) || 0;
  magenta = (magenta - key) / (1 - key) || 0;
  yellow = (yellow - key) / (1 - key) || 0;

  return [cyan * 100, magenta * 100, yellow * 100, key * 100];
}
