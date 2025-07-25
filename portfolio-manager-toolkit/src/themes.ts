import { ITheme } from "./interfaces/ITheme";

const fontSizes = {
  sm: "0.8rem",
  md: "1.15rem",
  lg: "2.5rem",
};

export const blueTheme: ITheme = {
  colors: {
    primary: "#0B294D",
    primaryAlternate: "#7ab2f5",
    secondary: "#4CA3E5",
    secondaryAlternate: "#11335A",
    tertiary: "#11335A",
    tertiaryAlternate: "#4CA3E5",
    background: "#FFFFFF",
    darkText: "black",
    lightText: "white",
  },
  fontSizes,
};

export const lightTheme: ITheme = {
  colors: {
    primary: "#426E6F",
    primaryAlternate: "#9ff3f5",
    secondary: "#DDE9E9",
    secondaryAlternate: "#346F6F",
    tertiary: "#346F6F",
    tertiaryAlternate: "#DDE9E9",
    background: "#FBFFFF",
    darkText: "#426E6F",
    lightText: "white",
  },
  fontSizes,
};

export const warmSpring: ITheme = {
  colors: {
    primary: "#B294A0",
    primaryAlternate: "#ffd6e7",
    secondary: "#C2CCD6",
    secondaryAlternate: "#7C8D7D",
    tertiary: "#7C8D7D",
    tertiaryAlternate: "#C2CCD6",
    background: "#F0EFEB",
    darkText: "black",
    lightText: "white",
  },
  fontSizes,
};

export const boldEndurance: ITheme = {
  colors: {
    primary: "#2A2A2A",
    primaryAlternate: "#cccccc",
    secondary: "#D9D9D9",
    secondaryAlternate: "#2A2A2A",
    tertiary: "#D5FC51",
    tertiaryAlternate: "#2A2A2A",
    background: "#FFFFFF",
    darkText: "black",
    lightText: "white",
  },
  fontSizes,
};

export const trustInBlue: ITheme = {
  colors: {
    primary: "#3148F6",
    primaryAlternate: "#c9d0ff",
    secondary: "#1C4B8F",
    secondaryAlternate: "#c9d0ff",
    tertiary: "#1C2127",
    tertiaryAlternate: "#c9d0ff",
    background: "#FFFFFF",
    darkText: "black",
    lightText: "white",
  },
  fontSizes,
};

export const fern: ITheme = {
  colors: {
    primary: "#19302A",
    primaryAlternate: "#98f5dd",
    secondary: "#8FBC55",
    secondaryAlternate: "#19302A",
    tertiary: "#DEE072",
    tertiaryAlternate: "#19302A",
    background: "#E5EFE7",
    darkText: "black",
    lightText: "white",
  },
  fontSizes,
};

export const themes = {
  blueTheme,
  lightTheme,
  warmSpring,
  boldEndurance,
  trustInBlue,
  fern,
  //   ...
};
