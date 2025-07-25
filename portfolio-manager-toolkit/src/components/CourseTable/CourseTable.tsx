import { themes } from "../../themes";
import { ITheme } from "../../interfaces/ITheme";
import { CourseTableProps } from "../../interfaces/ComponentProps";
import { useState } from "react";
import {
  Table,
  TableHeader,
  TableCell,
  TableRow,
  SortIcon,
} from "../shared/Table";

export function CourseTable({
  courses,
  theme = "lightTheme",
  style,
}: CourseTableProps) {
  const selectedTheme: ITheme =
    typeof theme === "string" ? themes[theme] : theme;
  const [sortBy, setSortBy] = useState<"name" | "grade" | "description">(
    "name"
  );
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const handleHeaderClick = (key: "name" | "grade" | "description") => {
    if (sortBy === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortDir("asc");
    }
  };

  const handleSortDirClick = () => {
    setSortDir(sortDir === "asc" ? "desc" : "asc");
  };

  const sortedSkills = sortBy
    ? [...courses].sort((a, b) => {
        const aValue = a[sortBy] ?? "";
        const bValue = b[sortBy] ?? "";
        if (aValue < bValue) return sortDir === "asc" ? -1 : 1;
        if (aValue > bValue) return sortDir === "asc" ? 1 : -1;
        return 0;
      })
    : courses;

  return (
    <Table theme={selectedTheme} style={style}>
      <colgroup>
        <col style={{ width: "40%" }} />
        <col style={{ width: "40%" }} />
        <col style={{ width: "20%" }} />
      </colgroup>
      <thead>
        <tr>
          <TableHeader
            theme={selectedTheme}
            active={sortBy === "name"}
            onClick={() => handleHeaderClick("name")}
          >
            Skill
            {sortBy === "name" && (
              <SortIcon theme={selectedTheme} onClick={handleSortDirClick}>
                {sortDir === "asc" ? " ▲" : " ▼"}
              </SortIcon>
            )}
          </TableHeader>
          <TableHeader
            theme={selectedTheme}
            active={sortBy === "description"}
            onClick={() => handleHeaderClick("description")}
          >
            Description
            {sortBy === "description" && (
              <SortIcon theme={selectedTheme} onClick={handleSortDirClick}>
                {sortDir === "asc" ? " ▲" : " ▼"}
              </SortIcon>
            )}
          </TableHeader>
          <TableHeader
            theme={selectedTheme}
            active={sortBy === "grade"}
            onClick={() => handleHeaderClick("grade")}
          >
            Grade
            {sortBy === "grade" && (
              <SortIcon theme={selectedTheme} onClick={handleSortDirClick}>
                {sortDir === "asc" ? " ▲" : " ▼"}
              </SortIcon>
            )}
          </TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedSkills.map((course, idx) => (
          <TableRow theme={selectedTheme} key={idx}>
            <TableCell theme={selectedTheme}>{course.name}</TableCell>
            <TableCell theme={selectedTheme}>
              {course.description ?? "-"}
            </TableCell>
            <TableCell theme={selectedTheme}>{course.grade ?? "-"}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}
