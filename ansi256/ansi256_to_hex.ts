// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Ansi256, Hex } from "../color_formats.ts";
import { ansi256ToRgb } from "./ansi256_to_rgb.ts";
import { rgbToHex } from "../rgb/rgb_to_hex.ts";

export function ansi256ToHex(...components: Ansi256): Hex {
  return rgbToHex(...ansi256ToRgb(...components));
}
