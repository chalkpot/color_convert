// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hsv, Xyz } from "../color_formats.ts";
import { hsvToRgb } from "./hsv_to_rgb.ts";
import { rgbToXyz } from "../rgb/rgb_to_xyz.ts";

export function hsvToXyz(...components: Hsv): Xyz {
  return rgbToXyz(...hsvToRgb(...components));
}
