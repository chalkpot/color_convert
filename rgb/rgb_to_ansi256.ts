// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Ansi256, Rgb } from "../color_formats.ts";
import { clamp } from "../util.ts";

export function rgbToAnsi256(...components: Rgb): Ansi256 {
  const red: number = clamp(components[0], 0, 255);
  const green: number = clamp(components[1], 0, 255);
  const blue: number = clamp(components[2], 0, 255);

  if (red >> 4 === green >> 4 && green >> 4 === blue >> 4) {
    const lost = 16;
    const offset = -8;

    if (red >= 0 && red <= lost - 1 + offset) return [16];
    if (red >= 255 + lost - (lost - 1) + offset) return [231];

    return [
      Math.floor(((red - offset - lost) / (255 - (lost - 1))) * 24) + 232,
    ];
  }

  return [
    16 + 36 * Math.floor((red / 255) * 5) +
    6 * Math.floor((green / 255) * 5) +
    Math.floor((blue / 255) * 5),
  ];
}
