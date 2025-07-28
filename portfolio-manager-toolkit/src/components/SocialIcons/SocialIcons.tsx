import styled from "styled-components";
import { themes } from "../../themes";
import { ITheme } from "../../interfaces/ITheme";
import { UserDataComponentProps } from "../../interfaces/ComponentProps";
import {
  GithubIcon,
  EmailIcon,
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
} from "./Icons";

const SocialIconsList = styled.ul`
  display: flex;
  gap: 4%;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

const SocialIconLink = styled.a<{ theme: ITheme }>`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.tertiary};
  transition: color 0.1s ease;

  & > svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.tertiaryAlternate};

    & > svg {
      transform: scale(1.1);
    }
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
      {userData.facebook_url && (
        <SocialIconLink
          theme={selectedTheme}
          href={userData.facebook_url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Find me on facebook"
        >
          <FacebookIcon fontSize="5rem" />
        </SocialIconLink>
      )}
    </SocialIconsList>
  );
}
