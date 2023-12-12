// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hex, Hsl } from "../color_formats.ts";
import { hexToRgb } from "./hex_to_rgb.ts";
import { rgbToHsl } from "../rgb/rgb_to_hsl.ts";

export function hexToHsl(...components: Hex): Hsl {
  return rgbToHsl(...hexToRgb(...components));
}
