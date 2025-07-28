import { ResumeIcon } from "./ResumeIcon";
import { mockUserData } from "../../../tests/testData";
import { themes } from "../../themes";

type ThemeName = keyof typeof themes;

export default {
  title: "Components/ResumeIcon",
  component: ResumeIcon,
};

export const WithUserData = () => (
  <ResumeIcon userData={mockUserData} theme="blueTheme" />
);

export const AllThemes = () => (
  <>
    {Object.keys(themes).map((themeName) => (
      <div key={themeName} style={{ marginBottom: "1rem" }}>
        <ResumeIcon userData={mockUserData} theme={themeName as ThemeName} />
      </div>
    ))}
  </>
);
