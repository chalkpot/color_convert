// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hsb, Rgb } from "../color_formats.ts";
import { hsvToRgb } from "../hsv/hsv_to_rgb.ts";

export function hsbToRgb(...components: Hsb): Rgb {
  return hsvToRgb(...components);
}
