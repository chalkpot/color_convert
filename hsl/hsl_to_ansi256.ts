// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hsl, Ansi256 } from "../color_formats.ts";
import { hslToRgb } from "./hsl_to_rgb.ts";
import { rgbToAnsi256 } from "../rgb/rgb_to_ansi256.ts";

export function hslToAnsi256(...components: Hsl): Ansi256 {
  return rgbToAnsi256(...hslToRgb(...components));
}