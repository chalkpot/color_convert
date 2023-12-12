// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Cmy, Ansi256 } from "../color_formats.ts";
import { cmyToRgb } from "./cmy_to_rgb.ts";
import { rgbToAnsi256 } from "../rgb/rgb_to_ansi256.ts";

export function cmyToAnsi256(...components: Cmy): Ansi256 {
  return rgbToAnsi256(...cmyToRgb(...components));
}