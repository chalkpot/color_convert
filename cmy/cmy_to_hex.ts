// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Cmy, Hex } from "../color_formats.ts";
import { cmyToRgb } from "./cmy_to_rgb.ts";
import { rgbToHex } from "../rgb/rgb_to_hex.ts";

export function cmyToHex(...components: Cmy): Hex {
  return rgbToHex(...cmyToRgb(...components));
}