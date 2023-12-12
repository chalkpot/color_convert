// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Lab, Name } from "../color_formats.ts";
import { nameToRgb } from "./name_to_rgb.ts";
import { rgbToLab } from "../rgb/rgb_to_lab.ts";

export function nameToLab(...components: Name): Lab {
  return rgbToLab(...nameToRgb(...components));
}
