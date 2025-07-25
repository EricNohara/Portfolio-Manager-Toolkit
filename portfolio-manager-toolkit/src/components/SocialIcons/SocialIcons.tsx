import styled from "styled-components";
import { themes } from "../../themes";
import { ITheme } from "../../interfaces/ITheme";
import { UserDataComponentProps } from "../../interfaces/ComponentProps";
import { GithubIcon, EmailIcon, InstagramIcon, LinkedinIcon } from "./Icons";

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

const SocialIconsList = styled.ul`
  display: flex;
  gap: 5%;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

const SocialIconLink = styled.a<{ theme: ITheme }>`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.tertiary};

  &:hover {
    color: ${({ theme }) => theme.colors.tertiaryAlternate};
  }
`;

export function SocialIcons({
  userData,
  theme = "lightTheme",
  style,
}: UserDataComponentProps) {
  const selectedTheme: ITheme =
    typeof theme === "string" ? themes[theme] : theme;

  return (
    <SocialIconsList>
      {userData.linkedin_url && (
        <SocialIconLink
          theme={selectedTheme}
          href={userData.linkedin_url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Find me on linkedin"
        >
          <LinkedinIcon fontSize="5rem" />
        </SocialIconLink>
      )}
      {userData.github_url && (
        <SocialIconLink
          theme={selectedTheme}
          href={userData.github_url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Find me on github"
        >
          <GithubIcon fontSize="5rem" />
        </SocialIconLink>
      )}
      {userData.email && (
        <SocialIconLink
          theme={selectedTheme}
          href={`mailto:${userData.email}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email me"
        >
          <EmailIcon fontSize="5rem" />
        </SocialIconLink>
      )}
      {userData.instagram_url && (
        <SocialIconLink
          theme={selectedTheme}
          href={userData.instagram_url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Find me on instagram"
        >
          <InstagramIcon fontSize="5rem" />
        </SocialIconLink>
      )}
    </SocialIconsList>
  );
}
