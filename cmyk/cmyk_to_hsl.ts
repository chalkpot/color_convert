// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Cmyk, Hsl } from "../color_formats.ts";
import { cmykToRgb } from "./cmyk_to_rgb.ts";
import { rgbToHsl } from "../rgb/rgb_to_hsl.ts";

export function cmykToHsl(...components: Cmyk): Hsl {
  return rgbToHsl(...cmykToRgb(...components));
}