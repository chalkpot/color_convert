// Copyright 2023 mineejo. All rights reserved. MIT license.

// File generated automatically!
// Generation script: /color_convert/_wrapper/wrapper.ts



import { Hex, Rgb } from "../color_formats.ts";

export function hexToRgb(...components: Hex): Rgb {
  let code: string = components[0];

  if (code.startsWith("#")) code = code.slice(1);

  if (code.length < 6) {
    code = code.slice(0, 3);
    code = code.charAt(0) + code.charAt(0) + code.charAt(1) + code.charAt(1) +
      code.charAt(2) + code.charAt(2);
  } else if (code.length > 6) code = code.slice(0, 6);

  return [
    parseInt(code.slice(0, 2), 16),
    parseInt(code.slice(2, 4), 16),
    parseInt(code.slice(4, 6), 16),
  ];
}
