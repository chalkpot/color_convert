// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Ansi8, Lab } from "../color_formats.ts";
import { labToRgb } from "./lab_to_rgb.ts";
import { rgbToAnsi8 } from "../rgb/rgb_to_ansi8.ts";

export function labToAnsi8(...components: Lab): Ansi8 {
  return rgbToAnsi8(...labToRgb(...components));
}
