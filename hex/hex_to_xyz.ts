// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Hex, Xyz } from "../color_formats.ts";
import { hexToRgb } from "./hex_to_rgb.ts";
import { rgbToXyz } from "../rgb/rgb_to_xyz.ts";

export function hexToXyz(...components: Hex): Xyz {
  return rgbToXyz(...hexToRgb(...components));
}
