// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Cmy, Xyz } from "../color_formats.ts";
import { cmyToRgb } from "./cmy_to_rgb.ts";
import { rgbToXyz } from "../rgb/rgb_to_xyz.ts";

export function cmyToXyz(...components: Cmy): Xyz {
  return rgbToXyz(...cmyToRgb(...components));
}
