// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Hex, Hsl } from "../color_formats.ts";
import { hslToRgb } from "./hsl_to_rgb.ts";
import { rgbToHex } from "../rgb/rgb_to_hex.ts";

export function hslToHex(...components: Hsl): Hex {
  return rgbToHex(...hslToRgb(...components));
}
