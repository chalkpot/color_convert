// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts

import { Lab, Name } from "../color_formats.ts";
import { labToRgb } from "./lab_to_rgb.ts";
import { rgbToName } from "../rgb/rgb_to_name.ts";

export function labToName(...components: Lab): Name {
  return rgbToName(...labToRgb(...components));
}