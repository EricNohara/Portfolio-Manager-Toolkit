import { themes } from "../../themes";
import { ITheme } from "../../interfaces/ITheme";
import { UserDataComponentProps } from "../../interfaces/ComponentProps";
import styled from "styled-components";

const CustomFooter = styled.footer<{ theme: ITheme }>`
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.primary};
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.colors.primary} 30%,
    black 100%
  );
  font-size: ${({ theme }) => theme.fontSizes.md};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1%;
`;

export function Footer({
  userData,
  theme = "lightTheme",
  style,
}: UserDataComponentProps) {
  const selectedTheme: ITheme =
    typeof theme === "string" ? themes[theme] : theme;

  return (
    userData && (
      <CustomFooter style={style} theme={selectedTheme}>
        <i>&copy; 2025 {userData.name && userData.name}</i>
        <p>|</p>
        <i>{userData.phone_number && `Contact: ${userData.phone_number}`}</i>
      </CustomFooter>
    )
  );
}
