// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Hex, Xyz } from "../color_formats.ts";
import { xyzToRgb } from "./xyz_to_rgb.ts";
import { rgbToHex } from "../rgb/rgb_to_hex.ts";

export function xyzToHex(...components: Xyz): Hex {
  return rgbToHex(...xyzToRgb(...components));
}
