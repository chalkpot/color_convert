// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Name, Hsl } from "../color_formats.ts";
import { nameToRgb } from "./name_to_rgb.ts";
import { rgbToHsl } from "../rgb/rgb_to_hsl.ts";

export function nameToHsl(...components: Name): Hsl {
  return rgbToHsl(...nameToRgb(...components));
}