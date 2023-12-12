// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts



import { Ansi256, Rgb } from "../color_formats.ts";
import { clamp } from "../util.ts";

export function ansi256ToRgb(...components: Ansi256): Rgb {
  const color = clamp(components[0], 16, 255);

  if (color >= 232) {
    const component: number = (color - 232) * 10 + 8;
    return [component, component, component];
  }

  const brights: number[] = [0, 95, 135, 175, 215, 255];
  return [
    brights[Math.floor(((color - 16) / 36) % 6)],
    brights[Math.floor(((color - 16) / 6) % 6)],
    brights[Math.floor((color - 16) % 6)],
  ];
}
