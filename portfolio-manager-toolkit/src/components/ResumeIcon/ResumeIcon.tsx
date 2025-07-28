import { themes } from "../../themes";
import { ITheme } from "../../interfaces/ITheme";
import { UserDataComponentProps } from "../../interfaces/ComponentProps";
import { UserDocumentIcon } from "../shared/Icons";
import { SocialIconLink } from "../shared/SocialIconLink";

export function ResumeIcon({
  userData,
  theme = "lightTheme",
  style,
}: UserDataComponentProps) {
  const selectedTheme: ITheme =
    typeof theme === "string" ? themes[theme] : theme;

  return (
    userData.resume_url && (
      <SocialIconLink
        style={style}
        theme={selectedTheme}
        href={userData.resume_url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View my resume"
      >
        <UserDocumentIcon fontSize="5rem" />
      </SocialIconLink>
    )
  );
}
