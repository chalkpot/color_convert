// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Ansi256, Lab } from "../color_formats.ts";
import { ansi256ToRgb } from "./ansi256_to_rgb.ts";
import { rgbToLab } from "../rgb/rgb_to_lab.ts";

export function ansi256ToLab(...components: Ansi256): Lab {
  return rgbToLab(...ansi256ToRgb(...components));
}