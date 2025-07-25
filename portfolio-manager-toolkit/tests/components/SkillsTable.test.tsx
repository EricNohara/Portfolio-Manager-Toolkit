import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { SkillsTable } from "../../src/components/SkillsTable/SkillsTable";
import { mockUserData } from "../mockUserData";

describe("SkillsTable", () => {
  it("renders all skill rows", () => {
    render(<SkillsTable userData={mockUserData} theme="lightTheme" />);
    mockUserData.skills.forEach((skill) => {
      expect(screen.getByText(skill.name)).toBeInTheDocument();
      expect(
        screen.getAllByText((skill.proficiency ?? "-").toString()).length
      ).toBeGreaterThan(0);
      expect(
        screen.getAllByText((skill.years_of_experience ?? "-").toString())
          .length
      ).toBeGreaterThan(0);
    });
  });

  it("sorts by skill name ascending and descending", () => {
    render(<SkillsTable userData={mockUserData} theme="lightTheme" />);
    const skillHeader = screen.getByText("Skill");
    // Initial sort is ascending by name
    const firstRow = screen.getAllByRole("row")[1];
    expect(firstRow).toHaveTextContent("CSS");
    // Click to toggle to descending
    fireEvent.click(skillHeader);
    const firstRowDesc = screen.getAllByRole("row")[1];
    expect(firstRowDesc).toHaveTextContent("TypeScript");
  });

  it("sorts by proficiency", () => {
    render(<SkillsTable userData={mockUserData} theme="lightTheme" />);
    const proficiencyHeader = screen.getByText("Proficiency");
    fireEvent.click(proficiencyHeader);
    // Ascending by proficiency
    const firstRow = screen.getAllByRole("row")[1];
    expect(firstRow).toHaveTextContent("Node.js");
    // Descending by proficiency
    fireEvent.click(proficiencyHeader);
    const firstRowDesc = screen.getAllByRole("row")[1];
    expect(firstRowDesc).toHaveTextContent("JavaScript");
  });

  it("sorts by years of experience", () => {
    render(<SkillsTable userData={mockUserData} theme="lightTheme" />);
    const yearsHeader = screen.getByText("Years of Experience");
    fireEvent.click(yearsHeader);
    // Ascending by years
    const firstRow = screen.getAllByRole("row")[1];
    expect(firstRow).toHaveTextContent("Node.js");
    // Descending by years
    fireEvent.click(yearsHeader);
    const firstRowDesc = screen.getAllByRole("row")[1];
    expect(firstRowDesc).toHaveTextContent("JavaScript");
  });
});
