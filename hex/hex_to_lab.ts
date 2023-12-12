// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Hex, Lab } from "../color_formats.ts";
import { hexToRgb } from "./hex_to_rgb.ts";
import { rgbToLab } from "../rgb/rgb_to_lab.ts";

export function hexToLab(...components: Hex): Lab {
  return rgbToLab(...hexToRgb(...components));
}
