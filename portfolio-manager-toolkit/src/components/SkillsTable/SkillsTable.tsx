import { themes } from "../../themes";
import { ITheme } from "../../interfaces/ITheme";
import { UserDataComponentProps } from "../../interfaces/ComponentProps";
import { useState } from "react";
import {
  Table,
  TableHeader,
  TableCell,
  TableRow,
  SortIcon,
} from "../shared/Table";

export function SkillsTable({
  userData,
  theme = "lightTheme",
  style,
}: UserDataComponentProps) {
  const selectedTheme: ITheme =
    typeof theme === "string" ? themes[theme] : theme;
  const [sortBy, setSortBy] = useState<
    "name" | "proficiency" | "years_of_experience"
  >("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const handleHeaderClick = (
    key: "name" | "proficiency" | "years_of_experience"
  ) => {
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
    ? [...userData.skills].sort((a, b) => {
        const aValue = a[sortBy] ?? "";
        const bValue = b[sortBy] ?? "";
        if (aValue < bValue) return sortDir === "asc" ? -1 : 1;
        if (aValue > bValue) return sortDir === "asc" ? 1 : -1;
        return 0;
      })
    : userData.skills;

  return (
    <Table theme={selectedTheme} style={style}>
      <colgroup>
        <col style={{ width: "50%" }} />
        <col style={{ width: "25%" }} />
        <col style={{ width: "25%" }} />
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
            active={sortBy === "proficiency"}
            onClick={() => handleHeaderClick("proficiency")}
          >
            Proficiency
            {sortBy === "proficiency" && (
              <SortIcon theme={selectedTheme} onClick={handleSortDirClick}>
                {sortDir === "asc" ? " ▲" : " ▼"}
              </SortIcon>
            )}
          </TableHeader>
          <TableHeader
            theme={selectedTheme}
            active={sortBy === "years_of_experience"}
            onClick={() => handleHeaderClick("years_of_experience")}
          >
            Years of Experience
            {sortBy === "years_of_experience" && (
              <SortIcon theme={selectedTheme} onClick={handleSortDirClick}>
                {sortDir === "asc" ? " ▲" : " ▼"}
              </SortIcon>
            )}
          </TableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedSkills.map((skill, idx) => (
          <TableRow theme={selectedTheme} key={idx}>
            <TableCell theme={selectedTheme}>{skill.name}</TableCell>
            <TableCell theme={selectedTheme}>
              {skill.proficiency ?? "-"}
            </TableCell>
            <TableCell theme={selectedTheme}>
              {skill.years_of_experience ?? "-"}
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}
