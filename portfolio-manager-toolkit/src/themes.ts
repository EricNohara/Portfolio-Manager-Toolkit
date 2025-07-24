import { ITheme } from "./interfaces/ITheme";

export const blueTheme: ITheme = {
  colors: {
    primary: "#0B294D",
    secondary: "#4CA3E5",
    tertiary: "#11335A",
    background: "#FFFFFF",
    darkText: "black",
    lightText: "white",
  },
  fontSizes: {
    sm: "0.8rem",
    md: "1.1rem",
    lg: "2rem",
  },
};

export const lightTheme: ITheme = {
  colors: {
    primary: "#426E6F",
    secondary: "#DDE9E9",
    tertiary: "#346F6F",
    background: "#FBFFFF",
    darkText: "#426E6F",
    lightText: "white",
  },
  fontSizes: {
    sm: "0.8rem",
    md: "1.1rem",
    lg: "2rem",
  },
};

export const themes = {
  blueTheme: blueTheme,
  lightTheme: lightTheme,
  //   ...
};
