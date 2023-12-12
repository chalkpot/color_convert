// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hsb, Hex } from "../color_formats.ts";
import { hsbToRgb } from "./hsb_to_rgb.ts";
import { rgbToHex } from "../rgb/rgb_to_hex.ts";

export function hsbToHex(...components: Hsb): Hex {
  return rgbToHex(...hsbToRgb(...components));
}