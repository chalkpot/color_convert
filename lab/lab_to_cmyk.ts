// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Lab, Cmyk } from "../color_formats.ts";
import { labToRgb } from "./lab_to_rgb.ts";
import { rgbToCmyk } from "../rgb/rgb_to_cmyk.ts";

export function labToCmyk(...components: Lab): Cmyk {
  return rgbToCmyk(...labToRgb(...components));
}