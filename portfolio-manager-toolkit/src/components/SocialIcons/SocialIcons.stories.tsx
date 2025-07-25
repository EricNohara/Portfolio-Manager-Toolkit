import { SocialIcons } from "./SocialIcons";
import { mockUserData } from "../../../tests/testData";
import { themes } from "../../themes";

type ThemeName = keyof typeof themes;

export default {
  title: "Components/SocialIcons",
  component: SocialIcons,
};

export const WithUserData = () => (
  <SocialIcons userData={mockUserData} theme="blueTheme" />
);

export const AllThemes = () => (
  <>
    {Object.keys(themes).map((themeName) => (
      <div key={themeName} style={{ marginBottom: "1rem" }}>
        <SocialIcons userData={mockUserData} theme={themeName as ThemeName} />
      </div>
    ))}
  </>
);
