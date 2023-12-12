// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hex, Hsb } from "../color_formats.ts";
import { hexToRgb } from "./hex_to_rgb.ts";
import { rgbToHsb } from "../rgb/rgb_to_hsb.ts";

export function hexToHsb(...components: Hex): Hsb {
  return rgbToHsb(...hexToRgb(...components));
}