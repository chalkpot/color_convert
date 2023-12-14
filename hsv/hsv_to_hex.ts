// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Hex, Hsv } from "../color_formats.ts";
import { hsvToRgb } from "./hsv_to_rgb.ts";
import { rgbToHex } from "../rgb/rgb_to_hex.ts";

export function hsvToHex(...components: Hsv): Hex {
  return rgbToHex(...hsvToRgb(...components));
}
