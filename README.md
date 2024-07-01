
# Color Picker

This TypeScript module provides functions to get a color based on a string input and predefined options. It includes functionality to restrict colors to certain shades, exclude certain categories, and supports methods for retrieving RGB, Hex, and font colors.

## Features

- **Get color based on string input**: Converts a string to a color by hashing the string and selecting a color from a predefined list.
- **Customizable options**: Allows for customizing the available shades, excluded categories, and theme.
- **RGB and Hex methods**: Provides methods to retrieve the RGB and Hex values of the selected color.
- **Font color determination**: Provides a method to determine the appropriate font color based on the selected color's brightness.

## Installation

To use this module, you need to include it in your TypeScript project. You can install it via npm or yarn:

```bash
npm install @calvin-coomer/avatar-color-picker
```

or

```bash
yarn add @calvin-coomer/avatar-color-picker
```

## Usage

Here's how you can use the `getColor` function and its associated methods:

### Importing the Module

```typescript
import { getColor, Category, Shade, Options } from '@calvin-coomer/avatar-color-picker';
```

### Getting a Color

```typescript
const color = getColor('calvin coomer');
console.log(color);
```

### Getting RGB Value

```typescript
const rgb = getColor.rgb('calvin coomer');
console.log(rgb);
```

### Getting Hex Value

```typescript
const hex = getColor.hex('calvin coomer');
console.log(hex);
```

### Getting Font Color

```typescript
const fontColor = getColor.fontColor('calvin coomer');
console.log(fontColor);
```

### Customizing Options

You can customize the options for `getColor` by providing an `Options` object:

```typescript
const options: Options = {
  shades: [Shade.Shade300, Shade.Shade400, Shade.Shade500],
  excludeCategories: [Category.red, Category.pink],
  darkTheme: true,
  lightFontColor: '#FFFFFF',
  darkFontColor: '#000000',
};

const customColor = getColor('calvin coomer', options);
console.log(customColor);
```

## API

### Enums

- **Category**: Defines the available color categories.
- **Shade**: Defines the available color shades.

### Interfaces

- **Color**: Represents a color object.
  - `category: Category`
  - `shade: Shade`
  - `rgb: string`
  - `hex: string`
  - `font: boolean`

- **Options**: Represents the options for color selection.
  - `excludeCategories: Category[]`
  - `shades: Shade[]`
  - `darkTheme: boolean`
  - `lightFontColor: string`
  - `darkFontColor: string`

### Functions

- **getColor(str: string, options?: Options): Color**
  - Returns a color object based on the string input and options.

- **getColor.rgb(str: string, options?: Options): string**
  - Returns the RGB value of the color.

- **getColor.hex(str: string, options?: Options): string**
  - Returns the Hex value of the color.

- **getColor.fontColor(str: string, options?: Options): string**
  - Returns the appropriate font color based on the color's brightness and the provided options.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.
