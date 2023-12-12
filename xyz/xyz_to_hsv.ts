// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Xyz, Hsv } from "../color_formats.ts";
import { xyzToRgb } from "./xyz_to_rgb.ts";
import { rgbToHsv } from "../rgb/rgb_to_hsv.ts";

export function xyzToHsv(...components: Xyz): Hsv {
  return rgbToHsv(...xyzToRgb(...components));
}