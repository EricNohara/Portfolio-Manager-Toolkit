import styled from "styled-components";
import { ITheme } from "../../interfaces/ITheme";

export const SocialIconLink = styled.a<{ theme: ITheme }>`
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
