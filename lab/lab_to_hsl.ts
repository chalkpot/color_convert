// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Hsl, Lab } from "../color_formats.ts";
import { labToRgb } from "./lab_to_rgb.ts";
import { rgbToHsl } from "../rgb/rgb_to_hsl.ts";

export function labToHsl(...components: Lab): Hsl {
  return rgbToHsl(...labToRgb(...components));
}
