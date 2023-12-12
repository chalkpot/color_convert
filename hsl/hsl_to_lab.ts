// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hsl, Lab } from "../color_formats.ts";
import { hslToRgb } from "./hsl_to_rgb.ts";
import { rgbToLab } from "../rgb/rgb_to_lab.ts";

export function hslToLab(...components: Hsl): Lab {
  return rgbToLab(...hslToRgb(...components));
}