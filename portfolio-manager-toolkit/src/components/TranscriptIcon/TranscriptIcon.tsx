import { themes } from "../../themes";
import { ITheme } from "../../interfaces/ITheme";
import { UserDataComponentProps } from "../../interfaces/ComponentProps";
import { EducationIcon } from "../shared/Icons";
import { SocialIconLink } from "../shared/SocialIconLink";

export function TranscriptIcon({
  userData,
  theme = "lightTheme",
  style,
}: UserDataComponentProps) {
  const selectedTheme: ITheme =
    typeof theme === "string" ? themes[theme] : theme;

  return (
    userData.transcript_url && (
      <SocialIconLink
        style={style}
        theme={selectedTheme}
        href={userData.transcript_url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View my transcript"
      >
        <EducationIcon fontSize="5rem" />
      </SocialIconLink>
    )
  );
}
