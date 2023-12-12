// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Lab, Ansi16 } from "../color_formats.ts";
import { labToRgb } from "./lab_to_rgb.ts";
import { rgbToAnsi16 } from "../rgb/rgb_to_ansi16.ts";

export function labToAnsi16(...components: Lab): Ansi16 {
  return rgbToAnsi16(...labToRgb(...components));
}