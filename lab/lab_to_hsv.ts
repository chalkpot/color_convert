// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Hsv, Lab } from "../color_formats.ts";
import { labToRgb } from "./lab_to_rgb.ts";
import { rgbToHsv } from "../rgb/rgb_to_hsv.ts";

export function labToHsv(...components: Lab): Hsv {
  return rgbToHsv(...labToRgb(...components));
}
