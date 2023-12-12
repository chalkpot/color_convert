// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Cmy, Cmyk } from "../color_formats.ts";
import { cmyToRgb } from "./cmy_to_rgb.ts";
import { rgbToCmyk } from "../rgb/rgb_to_cmyk.ts";

export function cmyToCmyk(...components: Cmy): Cmyk {
  return rgbToCmyk(...cmyToRgb(...components));
}