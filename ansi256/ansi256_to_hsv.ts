// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Ansi256, Hsv } from "../color_formats.ts";
import { ansi256ToRgb } from "./ansi256_to_rgb.ts";
import { rgbToHsv } from "../rgb/rgb_to_hsv.ts";

export function ansi256ToHsv(...components: Ansi256): Hsv {
  return rgbToHsv(...ansi256ToRgb(...components));
}
