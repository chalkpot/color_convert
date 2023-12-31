// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Ansi16, Hsb } from "../color_formats.ts";
import { hsbToRgb } from "./hsb_to_rgb.ts";
import { rgbToAnsi16 } from "../rgb/rgb_to_ansi16.ts";

export function hsbToAnsi16(...components: Hsb): Ansi16 {
  return rgbToAnsi16(...hsbToRgb(...components));
}
