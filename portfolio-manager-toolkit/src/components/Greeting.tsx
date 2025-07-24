import { IUserData } from "../interfaces/IUserData";
import styled from "styled-components";
import { themes } from "../themes";
import { ITheme } from "../interfaces/ITheme";

type GreetingProps =
  | { userData: IUserData; message?: never; theme?: keyof typeof themes }
  | { userData?: never; message: string; theme?: keyof typeof themes };

const GreetingDiv = styled.div<{ theme: ITheme }>`
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
  padding: 2rem;
`;

export function Greeting({
  userData,
  message,
  theme = "lightTheme",
}: GreetingProps) {
  const text: string = userData ? `Hi I'm ${userData.name}.` : message;
  const selectedTheme: ITheme = themes[theme];

  return <GreetingDiv theme={selectedTheme}>{text}</GreetingDiv>;
}
