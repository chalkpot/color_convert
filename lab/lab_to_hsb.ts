// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Hsb, Lab } from "../color_formats.ts";
import { labToRgb } from "./lab_to_rgb.ts";
import { rgbToHsb } from "../rgb/rgb_to_hsb.ts";

export function labToHsb(...components: Lab): Hsb {
  return rgbToHsb(...labToRgb(...components));
}
