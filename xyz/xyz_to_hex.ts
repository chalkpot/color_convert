// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Xyz, Hex } from "../color_formats.ts";
import { xyzToRgb } from "./xyz_to_rgb.ts";
import { rgbToHex } from "../rgb/rgb_to_hex.ts";

export function xyzToHex(...components: Xyz): Hex {
  return rgbToHex(...xyzToRgb(...components));
}