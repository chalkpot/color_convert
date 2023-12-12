// Copyright 2023 mineejo. All rights reserved. MIT license.

import { assertEquals } from "../../dev_deps.ts";
import { nameToRgb } from "./name_to_rgb.ts";

Deno.test("convert name to RGB", () => {
  assertEquals(nameToRgb("red"), [255, 0, 0]);
});
