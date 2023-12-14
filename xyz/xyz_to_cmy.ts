// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Cmy, Xyz } from "../color_formats.ts";
import { xyzToRgb } from "./xyz_to_rgb.ts";
import { rgbToCmy } from "../rgb/rgb_to_cmy.ts";

export function xyzToCmy(...components: Xyz): Cmy {
  return rgbToCmy(...xyzToRgb(...components));
}
