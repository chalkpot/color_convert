// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts



import { clamp } from "../util.ts";
import { Hsl, Rgb } from "../color_formats.ts";

export function hslToRgb(...components: Hsl): Rgb {
  let hue: number = clamp(components[0], 0, 360);
  if (hue > 1) hue = hue % 360 / 360;
  let saturation: number = clamp(components[1], 0, 100);
  if (saturation > 1) saturation /= 100;
  let lightness: number = clamp(components[2], 0, 100);
  if (lightness > 1) lightness /= 100;

  if (saturation === 0) {
    const gray: number = lightness * 255;
    return [gray, gray, gray];
  }

  const q: number = lightness < 0.5
    ? lightness * (1 + saturation)
    : lightness + saturation - lightness * saturation;
  const p: number = 2 * lightness - q;

  function hueToRgb(p: number, q: number, t: number): number {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }

  return [
    hueToRgb(p, q, hue + 1 / 3) * 255,
    hueToRgb(p, q, hue) * 255,
    hueToRgb(p, q, hue - 1 / 3) * 255,
  ];
}
