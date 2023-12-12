// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Xyz, Cmyk } from "../color_formats.ts";
import { xyzToRgb } from "./xyz_to_rgb.ts";
import { rgbToCmyk } from "../rgb/rgb_to_cmyk.ts";

export function xyzToCmyk(...components: Xyz): Cmyk {
  return rgbToCmyk(...xyzToRgb(...components));
}