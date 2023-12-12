// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Ansi8, Cmy } from "../color_formats.ts";
import { cmyToRgb } from "./cmy_to_rgb.ts";
import { rgbToAnsi8 } from "../rgb/rgb_to_ansi8.ts";

export function cmyToAnsi8(...components: Cmy): Ansi8 {
  return rgbToAnsi8(...cmyToRgb(...components));
}
