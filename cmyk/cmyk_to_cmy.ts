// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Cmyk, Cmy } from "../color_formats.ts";
import { cmykToRgb } from "./cmyk_to_rgb.ts";
import { rgbToCmy } from "../rgb/rgb_to_cmy.ts";

export function cmykToCmy(...components: Cmyk): Cmy {
  return rgbToCmy(...cmykToRgb(...components));
}