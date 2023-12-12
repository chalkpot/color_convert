// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Lab, Hex } from "../color_formats.ts";
import { labToRgb } from "./lab_to_rgb.ts";
import { rgbToHex } from "../rgb/rgb_to_hex.ts";

export function labToHex(...components: Lab): Hex {
  return rgbToHex(...labToRgb(...components));
}