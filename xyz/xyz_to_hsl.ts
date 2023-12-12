// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Xyz, Hsl } from "../color_formats.ts";
import { xyzToRgb } from "./xyz_to_rgb.ts";
import { rgbToHsl } from "../rgb/rgb_to_hsl.ts";

export function xyzToHsl(...components: Xyz): Hsl {
  return rgbToHsl(...xyzToRgb(...components));
}