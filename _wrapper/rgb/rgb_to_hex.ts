// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Hex, Rgb } from "../../color_formats.ts";
import { clamp } from "../../util.ts";

export function rgbToHex(...components: Rgb): Hex {
  return [
    clamp(Math.floor(components[0]), 0, 255).toString(16).padStart(2, "0") +
    clamp(Math.floor(components[1]), 0, 255).toString(16).padStart(2, "0") +
    clamp(Math.floor(components[2]), 0, 255).toString(16).padStart(2, "0"),
  ];
}
