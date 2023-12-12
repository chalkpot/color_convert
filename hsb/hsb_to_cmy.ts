// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Cmy, Hsb } from "../color_formats.ts";
import { hsbToRgb } from "./hsb_to_rgb.ts";
import { rgbToCmy } from "../rgb/rgb_to_cmy.ts";

export function hsbToCmy(...components: Hsb): Cmy {
  return rgbToCmy(...hsbToRgb(...components));
}
