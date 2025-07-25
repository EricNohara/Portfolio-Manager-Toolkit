import styled from "styled-components";
import { themes } from "../../themes";
import { ITheme } from "../../interfaces/ITheme";
import { UserDataComponentProps } from "../../interfaces/ComponentProps";
import { useState } from "react";

const Table = styled.table<{ theme: ITheme }>`
  color: ${({ theme }) => theme.colors.darkText};
  border-collapse: collapse;
  width: 100%;
`;

const TableRow = styled.tr<{ theme: ITheme }>`
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    filter: brightness(110%);
  }
`;

const TableCell = styled.td<{ theme: ITheme }>`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 1rem;
  text-align: left;
`;

const TableHeader = styled.th<{ theme: ITheme }>`
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
  padding: 1rem;
  text-align: left;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const SortIcon = styled.span<{ theme: ITheme }>`
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.md};
  border: none;
  cursor: pointer;
  margin-left: 2rem;
`;

export function SkillsTable({
  userData,
  theme = "lightTheme",
  style,
}: UserDataComponentProps) {
  const selectedTheme: ITheme = themes[theme];
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
        <col style={{ width: "40%" }} />
        <col style={{ width: "30%" }} />
        <col style={{ width: "30%" }} />
      </colgroup>
      <thead>
        <TableRow theme={selectedTheme}>
          <TableHeader
            theme={selectedTheme}
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
            onClick={() => handleHeaderClick("years_of_experience")}
          >
            Years of Experience
            {sortBy === "years_of_experience" && (
              <SortIcon theme={selectedTheme} onClick={handleSortDirClick}>
                {sortDir === "asc" ? " ▲" : " ▼"}
              </SortIcon>
            )}
          </TableHeader>
        </TableRow>
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
