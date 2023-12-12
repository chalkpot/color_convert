// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Xyz, Hsb } from "../color_formats.ts";
import { xyzToRgb } from "./xyz_to_rgb.ts";
import { rgbToHsb } from "../rgb/rgb_to_hsb.ts";

export function xyzToHsb(...components: Xyz): Hsb {
  return rgbToHsb(...xyzToRgb(...components));
}