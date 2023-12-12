// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hsl, Xyz } from "../color_formats.ts";
import { hslToRgb } from "./hsl_to_rgb.ts";
import { rgbToXyz } from "../rgb/rgb_to_xyz.ts";

export function hslToXyz(...components: Hsl): Xyz {
  return rgbToXyz(...hslToRgb(...components));
}