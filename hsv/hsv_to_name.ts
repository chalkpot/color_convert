// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hsv, Name } from "../color_formats.ts";
import { hsvToRgb } from "./hsv_to_rgb.ts";
import { rgbToName } from "../rgb/rgb_to_name.ts";

export function hsvToName(...components: Hsv): Name {
  return rgbToName(...hsvToRgb(...components));
}