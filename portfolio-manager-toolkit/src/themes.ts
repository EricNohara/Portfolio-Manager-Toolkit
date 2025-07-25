import { ITheme } from "./interfaces/ITheme";

const fontSizes = {
  sm: "0.8rem",
  md: "1.15rem",
  lg: "2.5rem",
};

export const blueTheme: ITheme = {
  colors: {
    primary: "#0B294D",
    secondary: "#4CA3E5",
    tertiary: "#11335A",
    background: "#FFFFFF",
    darkText: "black",
    lightText: "white",
  },
  fontSizes,
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
  fontSizes,
};

export const warmSpring: ITheme = {
  colors: {
    primary: "#B294A0",
    secondary: "#C2CCD6",
    tertiary: "#7C8D7D",
    background: "#F0EFEB",
    darkText: "black",
    lightText: "white",
  },
  fontSizes,
};

export const boldEndurance: ITheme = {
  colors: {
    primary: "#2A2A2A",
    secondary: "#D9D9D9",
    tertiary: "#D5FC51",
    background: "#FFFFFF",
    darkText: "black",
    lightText: "white",
  },
  fontSizes,
};

export const trustInBlue: ITheme = {
  colors: {
    primary: "#3148F6",
    secondary: "#1C2127",
    tertiary: "#1C4B8F",
    background: "#FFFFFF",
    darkText: "black",
    lightText: "white",
  },
  fontSizes,
};

export const fern: ITheme = {
  colors: {
    primary: "#19302A",
    secondary: "#8FBC55",
    tertiary: "#DEE072",
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
