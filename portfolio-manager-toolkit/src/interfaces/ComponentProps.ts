import { IUserData } from "./IUserData";
import { CSSProperties } from "react";
import { themes } from "../themes";

export type ComponentProps =
  | {
      userData: IUserData;
      message?: never;
      theme?: keyof typeof themes;
      style?: CSSProperties;
    }
  | {
      userData?: never;
      message: string;
      theme?: keyof typeof themes;
      style?: CSSProperties;
    };

export type UserDataComponentProps = {
  userData: IUserData;
  theme?: keyof typeof themes;
  style?: CSSProperties;
};
