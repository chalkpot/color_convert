// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Cmy, Hex } from "../color_formats.ts";
import { hexToRgb } from "./hex_to_rgb.ts";
import { rgbToCmy } from "../rgb/rgb_to_cmy.ts";

export function hexToCmy(...components: Hex): Cmy {
  return rgbToCmy(...hexToRgb(...components));
}
