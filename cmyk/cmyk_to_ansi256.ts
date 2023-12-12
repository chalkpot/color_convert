// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Cmyk, Ansi256 } from "../color_formats.ts";
import { cmykToRgb } from "./cmyk_to_rgb.ts";
import { rgbToAnsi256 } from "../rgb/rgb_to_ansi256.ts";

export function cmykToAnsi256(...components: Cmyk): Ansi256 {
  return rgbToAnsi256(...cmykToRgb(...components));
}