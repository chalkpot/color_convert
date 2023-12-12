// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Cmy, Name } from "../color_formats.ts";
import { cmyToRgb } from "./cmy_to_rgb.ts";
import { rgbToName } from "../rgb/rgb_to_name.ts";

export function cmyToName(...components: Cmy): Name {
  return rgbToName(...cmyToRgb(...components));
}
