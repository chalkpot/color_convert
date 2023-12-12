// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Cmy, Hsl } from "../color_formats.ts";
import { cmyToRgb } from "./cmy_to_rgb.ts";
import { rgbToHsl } from "../rgb/rgb_to_hsl.ts";

export function cmyToHsl(...components: Cmy): Hsl {
  return rgbToHsl(...cmyToRgb(...components));
}
