// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hsl, Ansi16 } from "../color_formats.ts";
import { hslToRgb } from "./hsl_to_rgb.ts";
import { rgbToAnsi16 } from "../rgb/rgb_to_ansi16.ts";

export function hslToAnsi16(...components: Hsl): Ansi16 {
  return rgbToAnsi16(...hslToRgb(...components));
}