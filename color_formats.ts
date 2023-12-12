// Copyright 2023 mineejo. All rights reserved. MIT license.

import { colors } from "./deps.ts";

export type Ansi8 = [number];
export type Ansi16 = [number];
export type Ansi256 = [number];
export type Cmy = [number, number, number];
export type Cmyk = [number, number, number, number];
export type Hex = [string];
export type Hsb = [number, number, number];
export type Hsl = [number, number, number];
export type Hsv = [number, number, number];
export type Lab = [number, number, number];
export type Name = [keyof typeof colors];
export type Rgb = [number, number, number];
export type Xyz = [number, number, number];
