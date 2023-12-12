// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Ansi256, Name } from "../color_formats.ts";
import { ansi256ToRgb } from "./ansi256_to_rgb.ts";
import { rgbToName } from "../rgb/rgb_to_name.ts";

export function ansi256ToName(...components: Ansi256): Name {
  return rgbToName(...ansi256ToRgb(...components));
}
