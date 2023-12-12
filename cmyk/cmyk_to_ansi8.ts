// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Ansi8, Cmyk } from "../color_formats.ts";
import { cmykToRgb } from "./cmyk_to_rgb.ts";
import { rgbToAnsi8 } from "../rgb/rgb_to_ansi8.ts";

export function cmykToAnsi8(...components: Cmyk): Ansi8 {
  return rgbToAnsi8(...cmykToRgb(...components));
}
