// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hsv, Ansi256 } from "../color_formats.ts";
import { hsvToRgb } from "./hsv_to_rgb.ts";
import { rgbToAnsi256 } from "../rgb/rgb_to_ansi256.ts";

export function hsvToAnsi256(...components: Hsv): Ansi256 {
  return rgbToAnsi256(...hsvToRgb(...components));
}