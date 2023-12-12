// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hsv, Lab } from "../color_formats.ts";
import { hsvToRgb } from "./hsv_to_rgb.ts";
import { rgbToLab } from "../rgb/rgb_to_lab.ts";

export function hsvToLab(...components: Hsv): Lab {
  return rgbToLab(...hsvToRgb(...components));
}