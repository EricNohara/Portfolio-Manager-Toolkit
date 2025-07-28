import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TranscriptIcon } from "../../src/components/TranscriptIcon/TranscriptIcon";
import { mockUserData } from "../testData";
import { IUserData } from "../../src/interfaces/IUserData";

describe("TranscriptIcon", () => {
  it("renders link to resume when resume_url is provided", () => {
    render(<TranscriptIcon userData={mockUserData} />);
    const link = screen.getByLabelText(/view my resume/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", mockUserData.resume_url);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not render if resume_url is missing", () => {
    const missingResumeUserData: IUserData = {
      ...mockUserData,
    };

    missingResumeUserData.resume_url = null;
    render(<TranscriptIcon userData={missingResumeUserData} />);
    expect(screen.queryByLabelText(/view my resume/i)).toBeNull();
  });
});
