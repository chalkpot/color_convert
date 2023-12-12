// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Hsl, Rgb } from "../color_formats.ts";
import { clamp } from "../util.ts";

export function rgbToHsl(...components: Rgb): Hsl {
  let red: number = clamp(components[0], 0, 255);
  if (red > 1) red = red / 255;
  let green: number = clamp(components[1], 0, 255);
  if (green > 1) green = green / 255;
  let blue: number = clamp(components[2], 0, 255);
  if (blue > 1) blue = blue / 255;

  const maxBright: number = Math.max(red, green, blue);
  const minBright: number = Math.min(red, green, blue);

  let hue: number;
  switch (maxBright) {
    default:
    case minBright:
      hue = 0;
      break;
    case red:
      hue = (60 * ((green - blue) / (maxBright - minBright)) + 360) % 360;
      break;
    case green:
      hue = (60 * ((blue - red) / (maxBright - minBright)) + 120) % 360;
      break;
    case blue:
      hue = (60 * ((red - green) / (maxBright - minBright)) + 240) % 360;
      break;
  }

  let saturation: number;
  switch (true) {
    case maxBright === minBright:
      saturation = 0;
      break;
    case (maxBright + minBright) / 2 <= 0.5:
      saturation = (maxBright - minBright) / (maxBright + minBright);
      break;
    default:
      saturation = (maxBright - minBright) / (2 - (maxBright + minBright));
      break;
  }

  return [
    hue,
    saturation * 100,
    (maxBright + minBright) / 2 * 100,
  ];
}
