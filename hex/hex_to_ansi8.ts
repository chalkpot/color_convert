// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Ansi8, Hex } from "../color_formats.ts";
import { hexToRgb } from "./hex_to_rgb.ts";
import { rgbToAnsi8 } from "../rgb/rgb_to_ansi8.ts";

export function hexToAnsi8(...components: Hex): Ansi8 {
  return rgbToAnsi8(...hexToRgb(...components));
}
