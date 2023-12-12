# Color convert

Color convert is a set of conversion functions and automated conversions of
color models and formats.

### About

Color convert does not rely on fragile practices, like converting ANSI16 to RGB.
Why is this fragile? RGB is 16 million colors, converting to ANSI16 we get the
code or ID of the color, not the color itself, so they are called system colors
and are reserved by the system, changing depending on the runtime environment.

- Quite a few conversions are planned for the future if anyone needs it.
- All percentages are specified in the range `0` to `100`, this is more readable
  to the user.
- `HSV` and `HSB` are the same thing, but separated due to the frequent use of
  both names.
- `LAB` refers to `CIELAB` and `RGB` refers to `sRGB`, these are the most
  frequent variants of the models that have become the basis, so do not need
  direct name clarification.

## Installation

`CommonJS` (script directory) and `ModuleJS` (esm directory) support for
`Node.js`, see [NPM page] for installation command. Also support for `Yarn` and
other package managers or CDNs like `UNPKG`. For `Deno` reference see
[module page], or use CDN like `esm.sh`.

[NPM page]: https://www.npmjs.com/package/@chalkpot/color_convert
[module page]: https://deno.land/x/chalkpot_color_convert

## Usage

```ts
const green = rgbToAnsi16(0, 255, 0)[0];
console.log(green); // 10
console.log(wrapAnsi16(green)); // [92, 102]

console.log(rgbToName(255, 0, 0)[0]); // red

console.log(rgbToLab(255, 100, 25)); // [62.03..., 56.12..., 66.05...]
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to
discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
