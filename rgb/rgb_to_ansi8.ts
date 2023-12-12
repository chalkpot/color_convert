// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Ansi8, Rgb } from "../color_formats.ts";
import { rgbToAnsi16 } from "./rgb_to_ansi16.ts";
import { ansi16ToAnsi8 } from "../ansi16/ansi16_to_ansi8.ts";

export function rgbToAnsi8(...components: Rgb): Ansi8 {
  return ansi16ToAnsi8(rgbToAnsi16(...components)[0]);
}
