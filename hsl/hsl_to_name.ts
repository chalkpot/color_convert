// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hsl, Name } from "../color_formats.ts";
import { hslToRgb } from "./hsl_to_rgb.ts";
import { rgbToName } from "../rgb/rgb_to_name.ts";

export function hslToName(...components: Hsl): Name {
  return rgbToName(...hslToRgb(...components));
}