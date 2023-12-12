// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hsb, Lab } from "../color_formats.ts";
import { hsbToRgb } from "./hsb_to_rgb.ts";
import { rgbToLab } from "../rgb/rgb_to_lab.ts";

export function hsbToLab(...components: Hsb): Lab {
  return rgbToLab(...hsbToRgb(...components));
}