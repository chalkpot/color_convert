// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hsl, Hsb } from "../color_formats.ts";
import { hslToRgb } from "./hsl_to_rgb.ts";
import { rgbToHsb } from "../rgb/rgb_to_hsb.ts";

export function hslToHsb(...components: Hsl): Hsb {
  return rgbToHsb(...hslToRgb(...components));
}