// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Ansi16, Hsv } from "../color_formats.ts";
import { hsvToRgb } from "./hsv_to_rgb.ts";
import { rgbToAnsi16 } from "../rgb/rgb_to_ansi16.ts";

export function hsvToAnsi16(...components: Hsv): Ansi16 {
  return rgbToAnsi16(...hsvToRgb(...components));
}
