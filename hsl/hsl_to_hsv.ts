// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hsl, Hsv } from "../color_formats.ts";
import { hslToRgb } from "./hsl_to_rgb.ts";
import { rgbToHsv } from "../rgb/rgb_to_hsv.ts";

export function hslToHsv(...components: Hsl): Hsv {
  return rgbToHsv(...hslToRgb(...components));
}
