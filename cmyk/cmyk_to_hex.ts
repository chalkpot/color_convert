// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Cmyk, Hex } from "../color_formats.ts";
import { cmykToRgb } from "./cmyk_to_rgb.ts";
import { rgbToHex } from "../rgb/rgb_to_hex.ts";

export function cmykToHex(...components: Cmyk): Hex {
  return rgbToHex(...cmykToRgb(...components));
}
