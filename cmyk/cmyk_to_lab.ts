// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Cmyk, Lab } from "../color_formats.ts";
import { cmykToRgb } from "./cmyk_to_rgb.ts";
import { rgbToLab } from "../rgb/rgb_to_lab.ts";

export function cmykToLab(...components: Cmyk): Lab {
  return rgbToLab(...cmykToRgb(...components));
}
