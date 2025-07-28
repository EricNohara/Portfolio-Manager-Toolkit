import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SocialIcons } from "../../src/components/SocialIcons/SocialIcons";
import { mockUserData } from "../testData";
import { IUserData } from "../../src/interfaces/IUserData";

describe("SocialIcons", () => {
  it("renders all social icon links with correct attributes", () => {
    render(<SocialIcons userData={mockUserData} />);
    expect(screen.getByLabelText(/find me on linkedin/i)).toHaveAttribute(
      "href",
      mockUserData.linkedin_url
    );
    expect(screen.getByLabelText(/find me on github/i)).toHaveAttribute(
      "href",
      mockUserData.github_url
    );
    expect(screen.getByLabelText(/email me/i)).toHaveAttribute(
      "href",
      `mailto:${mockUserData.email}`
    );
    expect(screen.getByLabelText(/find me on instagram/i)).toHaveAttribute(
      "href",
      mockUserData.instagram_url
    );
    expect(screen.getByLabelText(/find me on facebook/i)).toHaveAttribute(
      "href",
      mockUserData.facebook_url
    );
  });

  it("does not render icons if url is missing", () => {
    const missingLinksUserData: IUserData = {
      ...mockUserData,
    };
    missingLinksUserData.github_url = null;
    missingLinksUserData.linkedin_url = null;
    missingLinksUserData.instagram_url = null;
    missingLinksUserData.facebook_url = null;

    render(<SocialIcons userData={missingLinksUserData} />);
    expect(screen.queryByLabelText(/find me on linkedin/i)).toBeNull();
    expect(screen.queryByLabelText(/find me on github/i)).toBeNull();
    expect(screen.queryByLabelText(/find me on instagram/i)).toBeNull();
    expect(screen.queryByLabelText(/find me on facebook/i)).toBeNull();
  });
});
