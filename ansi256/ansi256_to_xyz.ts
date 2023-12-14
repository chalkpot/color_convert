// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_generator/_generator.ts

import { Ansi256, Xyz } from "../color_formats.ts";
import { ansi256ToRgb } from "./ansi256_to_rgb.ts";
import { rgbToXyz } from "../rgb/rgb_to_xyz.ts";

export function ansi256ToXyz(...components: Ansi256): Xyz {
  return rgbToXyz(...ansi256ToRgb(...components));
}
