// Copyright 2023 mineejo. All rights reserved. MIT license.

import { assertEquals } from "../../dev_deps.ts";
import { rgbToAnsi16 } from "./rgb_to_ansi16.ts";

Deno.test("convert RGB to ANSI16", () => {
  assertEquals(rgbToAnsi16(0, 0, 0), [0]);
  assertEquals(rgbToAnsi16(128, 0, 0), [1]);
  assertEquals(rgbToAnsi16(0, 128, 0), [2]);
  assertEquals(rgbToAnsi16(128, 128, 0), [3]);
  assertEquals(rgbToAnsi16(0, 0, 128), [4]);
  assertEquals(rgbToAnsi16(128, 0, 128), [5]);
  assertEquals(rgbToAnsi16(0, 128, 128), [6]);
  assertEquals(rgbToAnsi16(255, 0, 0), [9]);
  assertEquals(rgbToAnsi16(0, 255, 0), [10]);
  assertEquals(rgbToAnsi16(255, 255, 0), [11]);
  assertEquals(rgbToAnsi16(0, 0, 255), [12]);
  assertEquals(rgbToAnsi16(255, 0, 255), [13]);
  assertEquals(rgbToAnsi16(0, 255, 255), [14]);
  assertEquals(rgbToAnsi16(255, 255, 255), [15]);

  assertEquals(rgbToAnsi16(128, 128, 128), [7]);
  assertEquals(rgbToAnsi16(192, 192, 192), [15]);
});
