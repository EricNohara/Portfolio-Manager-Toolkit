import { Greeting } from "./Greeting";
import { mockUserData } from "../../../tests/testData";
import { themes } from "../../themes";

type ThemeName = keyof typeof themes;

export default {
  title: "Components/Greeting",
  component: Greeting,
};

export const WithUserData = () => (
  <Greeting userData={mockUserData} theme="blueTheme" />
);

export const WithMessage = () => (
  <Greeting message="Welcome, guest!" theme="lightTheme" />
);

export const AllThemes = () => (
  <>
    {Object.keys(themes).map((themeName) => (
      <div key={themeName} style={{ marginBottom: "1rem" }}>
        <Greeting userData={mockUserData} theme={themeName as ThemeName} />
      </div>
    ))}
  </>
);
