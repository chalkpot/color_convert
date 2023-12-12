// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Name, Rgb } from "../../color_formats.ts";
import { colors } from "../../deps.ts";

export function nameToRgb(...name: Name): Rgb {
  return colors[name[0]].rgb as Rgb;
}
