// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Cmy, Hsl } from "../color_formats.ts";
import { hslToRgb } from "./hsl_to_rgb.ts";
import { rgbToCmy } from "../rgb/rgb_to_cmy.ts";

export function hslToCmy(...components: Hsl): Cmy {
  return rgbToCmy(...hslToRgb(...components));
}
