// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Ansi256, Lab } from "../color_formats.ts";
import { labToRgb } from "./lab_to_rgb.ts";
import { rgbToAnsi256 } from "../rgb/rgb_to_ansi256.ts";

export function labToAnsi256(...components: Lab): Ansi256 {
  return rgbToAnsi256(...labToRgb(...components));
}
