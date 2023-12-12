// Copyright 2023 mineejo. All rights reserved. MIT license.

import { clamp } from "../util.ts";
import { Hsv, Rgb } from "../color_formats.ts";

export function hsvToRgb(...components: Hsv): Rgb {
  let hue: number = clamp(components[0], 0, 360);
  if (hue > 1) hue = hue % 360 / 360;
  let saturation: number = clamp(components[1], 0, 100);
  if (saturation > 1) saturation /= 100;
  let brightness: number = clamp(components[2], 0, 100);
  if (brightness > 1) brightness /= 100;

  const i: number = Math.floor(hue * 6);
  const f: number = hue * 6 - i;
  const p: number = brightness * (1 - saturation);
  const q: number = brightness * (1 - f * saturation);
  const t: number = brightness * (1 - (1 - f) * saturation);

  let red = 0, green = 0, blue = 0;
  switch (i % 6) {
    case 0:
      red = brightness;
      green = t;
      blue = p;
      break;
    case 1:
      red = q;
      green = brightness;
      blue = p;
      break;
    case 2:
      red = p;
      green = brightness;
      blue = t;
      break;
    case 3:
      red = p;
      green = q;
      blue = brightness;
      break;
    case 4:
      red = t;
      green = p;
      blue = brightness;
      break;
    case 5:
      red = brightness;
      green = p;
      blue = q;
      break;
  }

  return [red * 255, green * 255, blue * 255];
}
