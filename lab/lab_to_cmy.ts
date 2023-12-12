// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Lab, Cmy } from "../color_formats.ts";
import { labToRgb } from "./lab_to_rgb.ts";
import { rgbToCmy } from "../rgb/rgb_to_cmy.ts";

export function labToCmy(...components: Lab): Cmy {
  return rgbToCmy(...labToRgb(...components));
}