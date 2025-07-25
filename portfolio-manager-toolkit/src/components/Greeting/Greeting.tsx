import styled from "styled-components";
import { themes } from "../../themes";
import { ITheme } from "../../interfaces/ITheme";
import { ComponentProps } from "../../interfaces/ComponentProps";

const GreetingDiv = styled.div<{ theme: ITheme }>`
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: bold;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

export function Greeting({
  userData,
  message,
  theme = "lightTheme",
  style,
}: ComponentProps) {
  const text: string = userData ? `Hi I'm ${userData.name}.` : message;
  const selectedTheme: ITheme = themes[theme];

  return (
    <GreetingDiv theme={selectedTheme} style={style}>
      {text}
    </GreetingDiv>
  );
}
