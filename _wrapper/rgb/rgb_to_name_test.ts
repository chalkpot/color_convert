// Copyright 2023 mineejo. All rights reserved. MIT license.

import { assertEquals } from "../../dev_deps.ts";
import { rgbToName } from "./rgb_to_name.ts";

Deno.test("convert RGB to name", () => {
  assertEquals(rgbToName(255, 0, 0), ["red"]);
});
