import { Footer } from "./Footer";
import { mockUserData } from "../../../tests/testData";
import { themes } from "../../themes";

type ThemeName = keyof typeof themes;

export default {
  title: "Components/Footer",
  component: Footer,
};

export const WithUserData = () => (
  <Footer userData={mockUserData} theme="blueTheme" />
);

export const AllThemes = () => (
  <>
    {Object.keys(themes).map((themeName) => (
      <div key={themeName} style={{ marginBottom: "1rem" }}>
        <Footer userData={mockUserData} theme={themeName as ThemeName} />
      </div>
    ))}
  </>
);
