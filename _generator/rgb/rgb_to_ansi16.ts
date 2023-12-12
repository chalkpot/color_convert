// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Ansi16, Rgb } from "../../color_formats.ts";
import { rgbToAnsi256 } from "./rgb_to_ansi256.ts";

export function rgbToAnsi16(...components: Rgb): Ansi16 {
  const color: number = rgbToAnsi256(
    components[0],
    components[1],
    components[2],
  )[0];

  if (color < 16) return [color];

  switch (true) {
    case color === 59:
    case color === 102:
      return [8];
    case color === 145:
    case color === 188:
      return [7];
  }

  const grayColor: number = Math.floor(((color - 232) / (24 - 1)) * 24);
  switch (true) {
    case color >= 232 && grayColor < 6:
      return [0];
    case color >= 232 && grayColor < 12:
      return [8];
    case color >= 232 && grayColor < 18:
      return [7];
    case color >= 232 && grayColor >= 18:
      return [15];
  }

  let red: number = Math.floor((color - 16) / 36);
  let green: number = Math.floor((color - 16 - red * 36) / 6);
  let blue: number = color - 16 - red * 36 - green * 6;

  red = red > 0 ? Math.round((red * 255) / 5) : 0;
  green = green > 0 ? Math.round((green * 255) / 5) : 0;
  blue = blue > 0 ? Math.round((blue * 255) / 5) : 0;

  const colorSensitivity: number[][] = [
    [-1, -1, -1],
    [98, 0, 0],
    [0, 102, 0],
    [99, 99, 0],
    [0, 0, 99],
    [92, 0, 92],
    [0, 92, 92],
    [415, 415, 415],
    [-46, -46, -46],
    [112, 0, 0],
    [0, 194, 0],
    [131, 91, 0],
    [0, 0, 105],
    [119, 0, 153],
    [0, 120, 112],
    [404, 404, 404],
  ];

  let closestDistance: number = Number.MAX_SAFE_INTEGER;
  let closestIndex = -1;
  for (let index = 0; index < colorSensitivity.length; index++) {
    if (!colorSensitivity[index]) continue;
    const [reds, greens, blues]: number[] = colorSensitivity[index];
    const distance: number = Math.sqrt(
      (reds - red) * (reds - red) + (greens - green) * (greens - green) +
        (blues - blue) * (blues - blue),
    );

    if (distance < closestDistance) {
      closestDistance = distance;
      closestIndex = index;
    }
  }

  return [closestIndex];
}
