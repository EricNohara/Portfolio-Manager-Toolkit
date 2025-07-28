import styled from "styled-components";
import { themes } from "../../themes";
import { ITheme } from "../../interfaces/ITheme";
import { ComponentProps } from "../../interfaces/ComponentProps";

const GreetingDiv = styled.div<{ theme: ITheme }>`
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;

const GreetingItem = styled.h1<{ theme: ITheme }>`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  padding: 0;
  margin: 0;
  font-weight: 100;
`;

const GreetingName = styled.span<{ theme: ITheme }>`
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: bold;
`;

const NameLink = styled.a`
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;
  display: inline-block;

  &:hover {
    transform: scale(0.9);
  }
`;

export function Greeting({
  userData,
  message,
  theme = "lightTheme",
  style,
}: ComponentProps) {
  const text: string = userData ? `Hey I'm ${userData.name}.` : message;
  const selectedTheme: ITheme =
    typeof theme === "string" ? themes[theme] : theme;

  return (
    <GreetingDiv theme={selectedTheme} style={style}>
      {userData && userData.name ? (
        <GreetingItem theme={selectedTheme}>
          Hey I&apos;m{" "}
          <GreetingName theme={selectedTheme}>
            {userData.linkedin_url ? (
              <NameLink
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find me on linkedin"
                href={userData.linkedin_url}
              >
                {userData.name}
              </NameLink>
            ) : (
              userData.name
            )}
          </GreetingName>
          .
        </GreetingItem>
      ) : (
        <GreetingItem theme={selectedTheme}>{message}</GreetingItem>
      )}
      {userData?.current_position && (
        <GreetingItem
          theme={selectedTheme}
        >{`I'm a ${userData.current_position.toLowerCase()}.`}</GreetingItem>
      )}
    </GreetingDiv>
  );
}
