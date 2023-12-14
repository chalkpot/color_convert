// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Cmyk, Hsb } from "../color_formats.ts";
import { cmykToRgb } from "./cmyk_to_rgb.ts";
import { rgbToHsb } from "../rgb/rgb_to_hsb.ts";

export function cmykToHsb(...components: Cmyk): Hsb {
  return rgbToHsb(...cmykToRgb(...components));
}
