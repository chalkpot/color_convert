// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Cmyk, Hsv } from "../color_formats.ts";
import { cmykToRgb } from "./cmyk_to_rgb.ts";
import { rgbToHsv } from "../rgb/rgb_to_hsv.ts";

export function cmykToHsv(...components: Cmyk): Hsv {
  return rgbToHsv(...cmykToRgb(...components));
}
