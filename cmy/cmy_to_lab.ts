// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Cmy, Lab } from "../color_formats.ts";
import { cmyToRgb } from "./cmy_to_rgb.ts";
import { rgbToLab } from "../rgb/rgb_to_lab.ts";

export function cmyToLab(...components: Cmy): Lab {
  return rgbToLab(...cmyToRgb(...components));
}
