import { TranscriptIcon } from "./TranscriptIcon";
import { mockUserData } from "../../../tests/testData";
import { themes } from "../../themes";

type ThemeName = keyof typeof themes;

export default {
  title: "Components/TranscriptIcon",
  component: TranscriptIcon,
};

export const WithUserData = () => (
  <TranscriptIcon userData={mockUserData} theme="blueTheme" />
);

export const AllThemes = () => (
  <>
    {Object.keys(themes).map((themeName) => (
      <div key={themeName} style={{ marginBottom: "1rem" }}>
        <TranscriptIcon
          userData={mockUserData}
          theme={themeName as ThemeName}
        />
      </div>
    ))}
  </>
);
