// Copyright 2023 mineejo. All rights reserved. MIT license.

import { assertEquals } from "../../dev_deps.ts";
import { hexToRgb } from "./hex_to_rgb.ts";

Deno.test("convert HEX to RGB", async (t) => {
  await t.step("convert short codes", () => {
    assertEquals(hexToRgb("#000"), [0, 0, 0]);
    assertEquals(hexToRgb("#f00"), [255, 0, 0]);
    assertEquals(hexToRgb("#0f0"), [0, 255, 0]);
    assertEquals(hexToRgb("#00f"), [0, 0, 255]);
    assertEquals(hexToRgb("#fff"), [255, 255, 255]);
  });
});
