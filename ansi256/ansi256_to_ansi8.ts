// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Ansi256, Ansi8 } from "../color_formats.ts";
import { ansi256ToRgb } from "./ansi256_to_rgb.ts";
import { rgbToAnsi8 } from "../rgb/rgb_to_ansi8.ts";

export function ansi256ToAnsi8(...components: Ansi256): Ansi8 {
  return rgbToAnsi8(...ansi256ToRgb(...components));
}
