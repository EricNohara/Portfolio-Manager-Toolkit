import { render, screen } from "@testing-library/react";
import { Greeting } from "../../src/components/Greeting/Greeting";
import { mockUserData, mockCustomTheme } from "../testData";
import "@testing-library/jest-dom";

describe("Greeting", () => {
  it("renders with user data", () => {
    render(<Greeting userData={mockUserData} />);
    const headings = screen.getAllByRole("heading");
    const found = headings.some(
      (h) =>
        h.textContent?.includes("Hey I'm") &&
        h.textContent?.includes(mockUserData.name || "") &&
        h.textContent?.includes(".")
    );
    expect(found).toBe(true);
  });

  it("renders with message string", () => {
    render(<Greeting message="Hello, Bob!" />);
    expect(screen.getByText("Hello, Bob!")).toBeInTheDocument();
  });

  it("applies theme color", () => {
    render(<Greeting message="Hello, Carol!" theme="blueTheme" />);
    const greetingDiv = screen.getByText("Hello, Carol!").closest("div");
    expect(greetingDiv).toHaveStyle("color: rgb(255, 255, 255)");
  });

  it("applies custom theme color", () => {
    render(<Greeting message="Hello, Custom!" theme={mockCustomTheme} />);
    const greetingDiv = screen.getByText("Hello, Custom!").closest("div");
    expect(greetingDiv).toHaveStyle("background-color: #123456");
    expect(greetingDiv).toHaveStyle("color: #fafafa");
  });
});
