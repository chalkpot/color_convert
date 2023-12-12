// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hsl, Hsv } from "../color_formats.ts";
import { hsvToRgb } from "./hsv_to_rgb.ts";
import { rgbToHsl } from "../rgb/rgb_to_hsl.ts";

export function hsvToHsl(...components: Hsv): Hsl {
  return rgbToHsl(...hsvToRgb(...components));
}
