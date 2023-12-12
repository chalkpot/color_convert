// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hsb, Name } from "../color_formats.ts";
import { hsbToRgb } from "./hsb_to_rgb.ts";
import { rgbToName } from "../rgb/rgb_to_name.ts";

export function hsbToName(...components: Hsb): Name {
  return rgbToName(...hsbToRgb(...components));
}
