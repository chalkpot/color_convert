// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Cmyk, Xyz } from "../color_formats.ts";
import { cmykToRgb } from "./cmyk_to_rgb.ts";
import { rgbToXyz } from "../rgb/rgb_to_xyz.ts";

export function cmykToXyz(...components: Cmyk): Xyz {
  return rgbToXyz(...cmykToRgb(...components));
}
