// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Lab, Xyz } from "../color_formats.ts";
import { labToRgb } from "./lab_to_rgb.ts";
import { rgbToXyz } from "../rgb/rgb_to_xyz.ts";

export function labToXyz(...components: Lab): Xyz {
  return rgbToXyz(...labToRgb(...components));
}
