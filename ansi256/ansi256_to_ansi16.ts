// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Ansi16, Ansi256 } from "../color_formats.ts";
import { ansi256ToRgb } from "./ansi256_to_rgb.ts";
import { rgbToAnsi16 } from "../rgb/rgb_to_ansi16.ts";

export function ansi256ToAnsi16(...components: Ansi256): Ansi16 {
  return rgbToAnsi16(...ansi256ToRgb(...components));
}
