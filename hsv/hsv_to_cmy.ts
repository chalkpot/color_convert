// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Cmy, Hsv } from "../color_formats.ts";
import { hsvToRgb } from "./hsv_to_rgb.ts";
import { rgbToCmy } from "../rgb/rgb_to_cmy.ts";

export function hsvToCmy(...components: Hsv): Cmy {
  return rgbToCmy(...hsvToRgb(...components));
}
