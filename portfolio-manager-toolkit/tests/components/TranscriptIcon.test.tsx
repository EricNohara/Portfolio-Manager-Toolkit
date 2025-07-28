import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { TranscriptIcon } from "../../src/components/TranscriptIcon/TranscriptIcon";
import { mockUserData } from "../testData";
import { IUserData } from "../../src/interfaces/IUserData";

describe("TranscriptIcon", () => {
  it("renders link to transcript when transcript_url is provided", () => {
    render(<TranscriptIcon userData={mockUserData} />);
    const link = screen.getByLabelText(/view my transcript/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", mockUserData.transcript_url);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not render if transcript_url is missing", () => {
    const missingTranscriptUserData: IUserData = {
      ...mockUserData,
    };
    missingTranscriptUserData.transcript_url = null;

    render(<TranscriptIcon userData={missingTranscriptUserData} />);
    expect(screen.queryByLabelText(/view my transcript/i)).toBeNull();
  });
});
