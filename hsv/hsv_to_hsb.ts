// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Hsb, Hsv } from "../color_formats.ts";
import { hsvToRgb } from "./hsv_to_rgb.ts";
import { rgbToHsb } from "../rgb/rgb_to_hsb.ts";

export function hsvToHsb(...components: Hsv): Hsb {
  return rgbToHsb(...hsvToRgb(...components));
}
