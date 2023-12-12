// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Cmy, Hsb } from "../color_formats.ts";
import { cmyToRgb } from "./cmy_to_rgb.ts";
import { rgbToHsb } from "../rgb/rgb_to_hsb.ts";

export function cmyToHsb(...components: Cmy): Hsb {
  return rgbToHsb(...cmyToRgb(...components));
}
