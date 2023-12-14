// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Name, Xyz } from "../color_formats.ts";
import { nameToRgb } from "./name_to_rgb.ts";
import { rgbToXyz } from "../rgb/rgb_to_xyz.ts";

export function nameToXyz(...components: Name): Xyz {
  return rgbToXyz(...nameToRgb(...components));
}
