// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Name, Hsb } from "../color_formats.ts";
import { nameToRgb } from "./name_to_rgb.ts";
import { rgbToHsb } from "../rgb/rgb_to_hsb.ts";

export function nameToHsb(...components: Name): Hsb {
  return rgbToHsb(...nameToRgb(...components));
}