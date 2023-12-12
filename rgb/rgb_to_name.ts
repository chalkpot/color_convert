// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { colors } from "../deps.ts";
import { Name, Rgb } from "../color_formats.ts";

function colorDiff(firstRgb: number[], secondRgb: number[]) {
  const rDiff: number = secondRgb[0] - firstRgb[0];
  const gDiff: number = secondRgb[1] - firstRgb[1];
  const bDiff: number = secondRgb[2] - firstRgb[2];
  return Math.sqrt(rDiff * rDiff + gDiff * gDiff + bDiff * bDiff);
}

export function rgbToName(...components: Rgb): Name {
  let minDiff = Infinity;
  let name = "";

  for (const color in colors) {
    const rgb: number[] = colors[color as keyof typeof colors].rgb;
    const diff: number = colorDiff(components, rgb);
    if (diff > minDiff) continue;

    minDiff = diff;
    name = color;
  }

  return [colors[name as keyof typeof colors].name] as Name;
}
