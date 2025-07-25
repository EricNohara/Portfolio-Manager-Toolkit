import { IUserData, ICourse } from "./IUserData";
import { CSSProperties } from "react";
import { themes } from "../themes";
import { ITheme } from "./ITheme";

export type ComponentProps =
  | {
      userData: IUserData;
      message?: never;
      theme?: keyof typeof themes | ITheme;
      style?: CSSProperties;
    }
  | {
      userData?: never;
      message: string;
      theme?: keyof typeof themes | ITheme;
      style?: CSSProperties;
    };

export type UserDataComponentProps = {
  userData: IUserData;
  theme?: keyof typeof themes | ITheme;
  style?: CSSProperties;
};

export type CourseTableProps = {
  courses: ICourse[];
  theme?: keyof typeof themes | ITheme;
  style?: CSSProperties;
};
