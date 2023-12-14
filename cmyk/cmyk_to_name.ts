// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Cmyk, Name } from "../color_formats.ts";
import { cmykToRgb } from "./cmyk_to_rgb.ts";
import { rgbToName } from "../rgb/rgb_to_name.ts";

export function cmykToName(...components: Cmyk): Name {
  return rgbToName(...cmykToRgb(...components));
}
