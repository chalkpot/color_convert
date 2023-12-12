// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hsb, Xyz } from "../color_formats.ts";
import { hsbToRgb } from "./hsb_to_rgb.ts";
import { rgbToXyz } from "../rgb/rgb_to_xyz.ts";

export function hsbToXyz(...components: Hsb): Xyz {
  return rgbToXyz(...hsbToRgb(...components));
}
