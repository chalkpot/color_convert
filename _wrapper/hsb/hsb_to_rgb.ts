// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Hsb, Rgb } from "../../color_formats.ts";
import { hsvToRgb } from "../hsv/hsv_to_rgb.ts";

export function hsbToRgb(...components: Hsb): Rgb {
  return hsvToRgb(...components);
}
