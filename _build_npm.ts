// Copyright 2023 mineejo. All rights reserved. MIT license.

import { build, emptyDir } from "https://deno.land/x/dnt@0.38.1/mod.ts";

const outDir = "./.npm";

await emptyDir(outDir);

await build({
  entryPoints: ["./mod.ts"],
  outDir: outDir,
  shims: {
    deno: true,
  },
  test: true,
  package: {
    name: "@chalkpot/color_convert",
    version: Deno.args[0],
    description:
      "Color convert is a set of conversion functions and automated conversions of color models and formats.",
    author: "mineejo",
    license: "MIT",
    homepage: "https://github.com/chalkpot/color_convert#readme",
    repository: {
      type: "git",
      url: "git+https://github.com/chalkpot/color_convert.git",
    },
    bugs: {
      url: "https://github.com/chalkpot/color_convert/issues",
    },
    keywords: [
      "chalkpot",
      "color",
      "convert",
      "color-convert",
      "ansi16",
      "ansi256",
      "cmy",
      "cmyk",
      "hex",
      "hsb",
      "hsl",
      "hsv",
      "lab",
      "name",
      "rgb",
      "xyz",
    ],
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", `${outDir}/LICENSE`);
    Deno.copyFileSync("README.md", `${outDir}/README.md`);
  },
});
