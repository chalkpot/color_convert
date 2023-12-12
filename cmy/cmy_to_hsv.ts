// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Cmy, Hsv } from "../color_formats.ts";
import { cmyToRgb } from "./cmy_to_rgb.ts";
import { rgbToHsv } from "../rgb/rgb_to_hsv.ts";

export function cmyToHsv(...components: Cmy): Hsv {
  return rgbToHsv(...cmyToRgb(...components));
}