// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Ansi256, Hsb } from "../color_formats.ts";
import { ansi256ToRgb } from "./ansi256_to_rgb.ts";
import { rgbToHsb } from "../rgb/rgb_to_hsb.ts";

export function ansi256ToHsb(...components: Ansi256): Hsb {
  return rgbToHsb(...ansi256ToRgb(...components));
}
