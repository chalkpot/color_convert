// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Name, Ansi256 } from "../color_formats.ts";
import { nameToRgb } from "./name_to_rgb.ts";
import { rgbToAnsi256 } from "../rgb/rgb_to_ansi256.ts";

export function nameToAnsi256(...components: Name): Ansi256 {
  return rgbToAnsi256(...nameToRgb(...components));
}