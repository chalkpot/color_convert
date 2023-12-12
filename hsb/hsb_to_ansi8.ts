// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Ansi8, Hsb } from "../color_formats.ts";
import { hsbToRgb } from "./hsb_to_rgb.ts";
import { rgbToAnsi8 } from "../rgb/rgb_to_ansi8.ts";

export function hsbToAnsi8(...components: Hsb): Ansi8 {
  return rgbToAnsi8(...hsbToRgb(...components));
}
