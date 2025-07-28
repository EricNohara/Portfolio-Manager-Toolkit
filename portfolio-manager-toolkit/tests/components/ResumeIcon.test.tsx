import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ResumeIcon } from "../../src/components/ResumeIcon/ResumeIcon";
import { IUserData } from "../../src/interfaces/IUserData";
import { mockUserData } from "../testData";

describe("ResumeIcon", () => {
  it("renders link to resume when resume_url is provided", () => {
    render(<ResumeIcon userData={mockUserData} />);
    const link = screen.getByLabelText(/view my resume/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", mockUserData.resume_url);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not render if resume_url is missing", () => {
    const missingResumeUserData: IUserData = {
      ...mockUserData,
      resume_url: null,
    };
    render(<ResumeIcon userData={missingResumeUserData} />);
    expect(screen.queryByLabelText(/view my resume/i)).toBeNull();
  });
});
