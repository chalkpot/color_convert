// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Hsb, Hsv } from "../color_formats.ts";
import { hsbToRgb } from "./hsb_to_rgb.ts";
import { rgbToHsv } from "../rgb/rgb_to_hsv.ts";

export function hsbToHsv(...components: Hsb): Hsv {
  return rgbToHsv(...hsbToRgb(...components));
}
