// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Hex, Lab } from "../color_formats.ts";
import { labToRgb } from "./lab_to_rgb.ts";
import { rgbToHex } from "../rgb/rgb_to_hex.ts";

export function labToHex(...components: Lab): Hex {
  return rgbToHex(...labToRgb(...components));
}
