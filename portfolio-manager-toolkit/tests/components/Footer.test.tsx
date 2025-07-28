import { render, screen } from "@testing-library/react";
import { Footer } from "../../src/components/Footer/Footer";
import "@testing-library/jest-dom";
import { mockUserData } from "../testData";

describe("Footer", () => {
  it("renders user name and phone number", () => {
    render(<Footer userData={mockUserData} />);
    expect(screen.getByText(/Jane Doe/)).toBeInTheDocument();
    expect(screen.getByText(/Contact: 555-123-4567/)).toBeInTheDocument();
  });
});
