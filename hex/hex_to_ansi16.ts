// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Ansi16, Hex } from "../color_formats.ts";
import { hexToRgb } from "./hex_to_rgb.ts";
import { rgbToAnsi16 } from "../rgb/rgb_to_ansi16.ts";

export function hexToAnsi16(...components: Hex): Ansi16 {
  return rgbToAnsi16(...hexToRgb(...components));
}
