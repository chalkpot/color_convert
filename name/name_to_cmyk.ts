// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Name, Cmyk } from "../color_formats.ts";
import { nameToRgb } from "./name_to_rgb.ts";
import { rgbToCmyk } from "../rgb/rgb_to_cmyk.ts";

export function nameToCmyk(...components: Name): Cmyk {
  return rgbToCmyk(...nameToRgb(...components));
}