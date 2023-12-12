// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hex, Name } from "../color_formats.ts";
import { hexToRgb } from "./hex_to_rgb.ts";
import { rgbToName } from "../rgb/rgb_to_name.ts";

export function hexToName(...components: Hex): Name {
  return rgbToName(...hexToRgb(...components));
}
