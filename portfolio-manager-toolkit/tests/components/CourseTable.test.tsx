import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { CourseTable } from "../../src/components/CourseTable/CourseTable";

const mockCourses = [
  { name: "Math", description: "Algebra and Geometry", grade: "A" },
  { name: "Science", description: "Physics and Chemistry", grade: "B" },
  { name: "History", description: "World History", grade: "C" },
];

describe("CourseTable", () => {
  it("renders all course rows", () => {
    render(<CourseTable courses={mockCourses} theme="lightTheme" />);
    mockCourses.forEach((course) => {
      expect(screen.getByText(course.name)).toBeInTheDocument();
      expect(screen.getByText(course.description)).toBeInTheDocument();
      expect(screen.getByText(course.grade)).toBeInTheDocument();
    });
  });

  it("sorts by course name ascending and descending", () => {
    render(<CourseTable courses={mockCourses} theme="lightTheme" />);
    const nameHeader = screen.getByText("Skill");
    // Initial sort is ascending by name
    const firstRow = screen.getAllByRole("row")[1];
    expect(firstRow).toHaveTextContent("History");
    // Click to toggle to descending
    fireEvent.click(nameHeader);
    const firstRowDesc = screen.getAllByRole("row")[1];
    expect(firstRowDesc).toHaveTextContent("Science");
  });

  it("sorts by description", () => {
    render(<CourseTable courses={mockCourses} theme="lightTheme" />);
    const descHeader = screen.getByText("Description");
    fireEvent.click(descHeader);
    // Ascending by description
    const firstRow = screen.getAllByRole("row")[1];
    expect(firstRow).toHaveTextContent("Math");
    // Descending by description
    fireEvent.click(descHeader);
    const firstRowDesc = screen.getAllByRole("row")[1];
    expect(firstRowDesc).toHaveTextContent("History"); // <-- fix here
  });

  it("sorts by grade", () => {
    render(<CourseTable courses={mockCourses} theme="lightTheme" />);
    const gradeHeader = screen.getByText("Grade");
    fireEvent.click(gradeHeader);
    // Ascending by grade ("A", "B", "C")
    const firstRow = screen.getAllByRole("row")[1];
    expect(firstRow).toHaveTextContent("Math");
    // Descending by grade ("C", "B", "A")
    fireEvent.click(gradeHeader);
    const firstRowDesc = screen.getAllByRole("row")[1];
    expect(firstRowDesc).toHaveTextContent("History");
  });
});
