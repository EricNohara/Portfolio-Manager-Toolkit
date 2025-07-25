import { CourseTable } from "./CourseTable";
import { mockUserData } from "../../../tests/testData";
import { themes } from "../../themes";

type ThemeName = keyof typeof themes;

export default {
  title: "Components/CourseTable",
  component: CourseTable,
};

export const AllThemes = () => (
  <>
    {Object.keys(themes).map((themeName) => (
      <div key={themeName} style={{ marginBottom: "1rem" }}>
        <CourseTable
          courses={mockUserData.education[0].courses}
          theme={themeName as ThemeName}
        />
      </div>
    ))}
  </>
);
