// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Name, Xyz } from "../color_formats.ts";
import { xyzToRgb } from "./xyz_to_rgb.ts";
import { rgbToName } from "../rgb/rgb_to_name.ts";

export function xyzToName(...components: Xyz): Name {
  return rgbToName(...xyzToRgb(...components));
}
