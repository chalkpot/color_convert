// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Cmy, Lab } from "../color_formats.ts";
import { labToRgb } from "./lab_to_rgb.ts";
import { rgbToCmy } from "../rgb/rgb_to_cmy.ts";

export function labToCmy(...components: Lab): Cmy {
  return rgbToCmy(...labToRgb(...components));
}
