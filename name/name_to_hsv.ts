// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Hsv, Name } from "../color_formats.ts";
import { nameToRgb } from "./name_to_rgb.ts";
import { rgbToHsv } from "../rgb/rgb_to_hsv.ts";

export function nameToHsv(...components: Name): Hsv {
  return rgbToHsv(...nameToRgb(...components));
}
