// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Name, Rgb } from "../color_formats.ts";
import { colors } from "../deps.ts";

export function nameToRgb(...name: Name): Rgb {
  return colors[name[0]].rgb as Rgb;
}
