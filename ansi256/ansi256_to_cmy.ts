// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Ansi256, Cmy } from "../color_formats.ts";
import { ansi256ToRgb } from "./ansi256_to_rgb.ts";
import { rgbToCmy } from "../rgb/rgb_to_cmy.ts";

export function ansi256ToCmy(...components: Ansi256): Cmy {
  return rgbToCmy(...ansi256ToRgb(...components));
}