// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hex, Name } from "../color_formats.ts";
import { nameToRgb } from "./name_to_rgb.ts";
import { rgbToHex } from "../rgb/rgb_to_hex.ts";

export function nameToHex(...components: Name): Hex {
  return rgbToHex(...nameToRgb(...components));
}
