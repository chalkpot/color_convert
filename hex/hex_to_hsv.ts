// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hex, Hsv } from "../color_formats.ts";
import { hexToRgb } from "./hex_to_rgb.ts";
import { rgbToHsv } from "../rgb/rgb_to_hsv.ts";

export function hexToHsv(...components: Hex): Hsv {
  return rgbToHsv(...hexToRgb(...components));
}