import { SkillsTable } from "./SkillsTable";
import { mockUserData } from "../../../tests/testData";
import { themes } from "../../themes";

type ThemeName = keyof typeof themes;

export default {
  title: "Components/SkillsTable",
  component: SkillsTable,
};

export const AllThemes = () => (
  <>
    {Object.keys(themes).map((themeName) => (
      <div key={themeName} style={{ marginBottom: "1rem" }}>
        <SkillsTable userData={mockUserData} theme={themeName as ThemeName} />
      </div>
    ))}
  </>
);
