// Copyright 2023 mineejo. All rights reserved. MIT license.

import { Ansi16, Ansi8 } from "../../color_formats.ts";
import { clamp } from "../../util.ts";

export function ansi16ToAnsi8(...components: Ansi16): Ansi8 {
  const color: number = clamp(components[0], 0, 15);
  return [(color > 7) ? color - 8 : color];
}
