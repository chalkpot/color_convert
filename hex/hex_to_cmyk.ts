// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Cmyk, Hex } from "../color_formats.ts";
import { hexToRgb } from "./hex_to_rgb.ts";
import { rgbToCmyk } from "../rgb/rgb_to_cmyk.ts";

export function hexToCmyk(...components: Hex): Cmyk {
  return rgbToCmyk(...hexToRgb(...components));
}
