// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Cmy, Ansi16 } from "../color_formats.ts";
import { cmyToRgb } from "./cmy_to_rgb.ts";
import { rgbToAnsi16 } from "../rgb/rgb_to_ansi16.ts";

export function cmyToAnsi16(...components: Cmy): Ansi16 {
  return rgbToAnsi16(...cmyToRgb(...components));
}