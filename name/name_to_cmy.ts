// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Cmy, Name } from "../color_formats.ts";
import { nameToRgb } from "./name_to_rgb.ts";
import { rgbToCmy } from "../rgb/rgb_to_cmy.ts";

export function nameToCmy(...components: Name): Cmy {
  return rgbToCmy(...nameToRgb(...components));
}
