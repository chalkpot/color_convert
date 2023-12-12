// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hsb, Hsl } from "../color_formats.ts";
import { hsbToRgb } from "./hsb_to_rgb.ts";
import { rgbToHsl } from "../rgb/rgb_to_hsl.ts";

export function hsbToHsl(...components: Hsb): Hsl {
  return rgbToHsl(...hsbToRgb(...components));
}