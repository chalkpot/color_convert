// Copyright 2023 mineejo. All rights reserved. MIT license.

import { assertEquals } from "../../dev_deps.ts";
import { ansi16ToAnsi8 } from "./ansi16_to_ansi8.ts";

Deno.test("convert ANSI16 to ANSI8", () => {
  assertEquals(ansi16ToAnsi8(0), [0]);
  assertEquals(ansi16ToAnsi8(1), [1]);
  assertEquals(ansi16ToAnsi8(2), [2]);
  assertEquals(ansi16ToAnsi8(3), [3]);
  assertEquals(ansi16ToAnsi8(4), [4]);
  assertEquals(ansi16ToAnsi8(5), [5]);
  assertEquals(ansi16ToAnsi8(6), [6]);
  assertEquals(ansi16ToAnsi8(7), [7]);
  assertEquals(ansi16ToAnsi8(8), [0]);

  assertEquals(ansi16ToAnsi8(9), [1]);
  assertEquals(ansi16ToAnsi8(10), [2]);
  assertEquals(ansi16ToAnsi8(11), [3]);
  assertEquals(ansi16ToAnsi8(12), [4]);
  assertEquals(ansi16ToAnsi8(13), [5]);
  assertEquals(ansi16ToAnsi8(14), [6]);
  assertEquals(ansi16ToAnsi8(15), [7]);
});
