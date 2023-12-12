// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Name, Hsv } from "../color_formats.ts";
import { nameToRgb } from "./name_to_rgb.ts";
import { rgbToHsv } from "../rgb/rgb_to_hsv.ts";

export function nameToHsv(...components: Name): Hsv {
  return rgbToHsv(...nameToRgb(...components));
}