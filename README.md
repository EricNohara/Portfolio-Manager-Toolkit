# Portfolio-Manager-Toolkit

A React component library and toolkit for building portfolio manager interfaces. Includes themed components, hooks, and utilities for rapid development.

### Author: Eric Nohara-LeClair

## Features

- **Themed Components:** Easily switch between built-in themes or provide your own.
- **Customizable:** Pass your own theme objects using the exported `ITheme` interface.
- **Reusable Hooks:** Includes hooks for retrieving user data from the portfolio manager API.
- **TypeScript Support:** Fully typed for safety and autocompletion.

## Installation

```sh
npm install portfolio-manager-toolkit
```

## Usage

### Import a Component

```tsx
import { Greeting, SkillsTable, ITheme } from "portfolio-manager-toolkit";
```

### Use Built-in Theme

```tsx
<Greeting userData={userData} theme="lightTheme" />
```

### Use a Custom Theme

```tsx
const myTheme: ITheme = {
  colors: {
    primary: "#123456",
    primaryAlternate: "#abcdef",
    secondary: "#654321",
    secondaryAlternate: "#fedcba",
    tertiary: "#111111",
    tertiaryAlternate: "#eeeeee",
    background: "#f0f0f0",
    darkText: "#222222",
    lightText: "#fafafa",
  },
  fontSizes: {
    sm: "0.8rem",
    md: "1.15rem",
    lg: "2.5rem",
  },
};

<Greeting message="Hello!" theme={myTheme} />;
```

### Skills Table Example

```tsx
<SkillsTable userData={userData} theme="blueTheme" />
```

## Custom Themes

You can create your own theme by using the exported `ITheme` interface:

```ts
import { ITheme } from "portfolio-manager-toolkit";

const customTheme: ITheme = { ... };
```

## Components

- `Greeting`: Displays a greeting message or user name.
- `SkillsTable`: Displays a sortable table of user skills.

## Contributing

Feel free to open issues or submit pull requests!

## License

ISC
