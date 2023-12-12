// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hsb, Rgb } from "../color_formats.ts";
import { clamp } from "../util.ts";

export function rgbToHsb(...components: Rgb): Hsb {
  let red: number = clamp(components[0], 0, 255);
  if (red > 1) red = red / 255;
  let green: number = clamp(components[1], 0, 255);
  if (green > 1) green = green / 255;
  let blue: number = clamp(components[2], 0, 255);
  if (blue > 1) blue = blue / 255;

  const maxBright: number = Math.max(red, green, blue);
  const minBright: number = Math.min(red, green, blue);
  const delta: number = maxBright - minBright;

  let hue: number;
  switch (maxBright) {
    default:
    case minBright:
      hue = 0;
      break;
    case red:
      hue = ((green - blue) / delta + (green < blue ? 6 : 0)) / 6;
      break;
    case green:
      hue = ((blue - red) / delta + 2) / 6;
      break;
    case blue:
      hue = ((red - green) / delta + 4) / 6;
      break;
  }

  return [
    hue * 360,
    (maxBright === 0 ? 0 : delta / maxBright) * 100,
    maxBright * 100,
  ];
}
