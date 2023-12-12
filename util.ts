// Copyright 2023 mineejo. All rights reserved. MIT license.

export function percent(value: number): number {
  return Math.min(Math.max(value, 0), 100);
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function createRgbColors(): [number, number, number][] {
  const colors: [number, number, number][] = [];
  for (let red = 0; red <= 255; red += 40) {
    for (let green = 0; green <= 255; green += 40) {
      for (let blue = 0; blue <= 255; blue += 40) {
        colors.push([red, green, blue]);
        if (blue === 0) blue += 55;
      }
      if (green === 0) green += 55;
    }
    if (red === 0) red += 55;
  }
  return colors;
}

export function createRgbGrays(): [number, number, number][] {
  const colors: [number, number, number][] = [];
  for (let component = 8; component <= 238; component += 10) {
    colors.push([component, component, component]);
  }
  return colors;
}
