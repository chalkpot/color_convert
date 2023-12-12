// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hex, Ansi256 } from "../color_formats.ts";
import { hexToRgb } from "./hex_to_rgb.ts";
import { rgbToAnsi256 } from "../rgb/rgb_to_ansi256.ts";

export function hexToAnsi256(...components: Hex): Ansi256 {
  return rgbToAnsi256(...hexToRgb(...components));
}