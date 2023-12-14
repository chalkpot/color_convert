// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Ansi256, Hsl } from "../color_formats.ts";
import { ansi256ToRgb } from "./ansi256_to_rgb.ts";
import { rgbToHsl } from "../rgb/rgb_to_hsl.ts";

export function ansi256ToHsl(...components: Ansi256): Hsl {
  return rgbToHsl(...ansi256ToRgb(...components));
}
