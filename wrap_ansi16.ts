// Copyright 2023 mineejo. All rights reserved. MIT license.

export function wrapAnsi16(code: number): [number, number] {
  if (code <= 7) return [30 + code, 40 + code];
  else return [90 + (code - 8), 100 + (code - 8)];
}
