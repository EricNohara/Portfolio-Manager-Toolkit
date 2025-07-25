import { render, screen } from "@testing-library/react";
import { Greeting } from "../../src/components/Greeting/Greeting";
import { mockUserData, mockCustomTheme } from "../testData";
import "@testing-library/jest-dom";

describe("Greeting", () => {
  it("renders with user data", () => {
    render(<Greeting userData={mockUserData} />);
    expect(
      screen.getByText(`Hi I'm ${mockUserData.name}.`)
    ).toBeInTheDocument();
  });

  it("renders with message string", () => {
    render(<Greeting message="Hello, Bob!" />);
    expect(screen.getByText("Hello, Bob!")).toBeInTheDocument();
  });

  it("applies theme color", () => {
    render(<Greeting message="Hello, Carol!" theme="blueTheme" />);
    const greeting = screen.getByText("Hello, Carol!");
    expect(greeting).toHaveStyle("color: rgb(255, 255, 255)");
  });

  it("applies custom theme color", () => {
    render(<Greeting message="Hello, Custom!" theme={mockCustomTheme} />);
    const greeting = screen.getByText("Hello, Custom!");
    expect(greeting).toHaveStyle("background-color: #123456");
    expect(greeting).toHaveStyle("color: #fafafa");
  });
});
