// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Name, Ansi16 } from "../color_formats.ts";
import { nameToRgb } from "./name_to_rgb.ts";
import { rgbToAnsi16 } from "../rgb/rgb_to_ansi16.ts";

export function nameToAnsi16(...components: Name): Ansi16 {
  return rgbToAnsi16(...nameToRgb(...components));
}