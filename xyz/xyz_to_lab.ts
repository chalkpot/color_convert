// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Lab, Xyz } from "../color_formats.ts";
import { xyzToRgb } from "./xyz_to_rgb.ts";
import { rgbToLab } from "../rgb/rgb_to_lab.ts";

export function xyzToLab(...components: Xyz): Lab {
  return rgbToLab(...xyzToRgb(...components));
}
