// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Ansi8, Name } from "../color_formats.ts";
import { nameToRgb } from "./name_to_rgb.ts";
import { rgbToAnsi8 } from "../rgb/rgb_to_ansi8.ts";

export function nameToAnsi8(...components: Name): Ansi8 {
  return rgbToAnsi8(...nameToRgb(...components));
}
