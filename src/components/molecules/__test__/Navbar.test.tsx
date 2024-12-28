import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import "@testing-library/jest-dom"; // Ensure jest-dom matchers like toBeInTheDocument are available
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("next/link", () => {
  // eslint-disable-next-line react/display-name
  return ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  );
});

describe("Navbar Component", () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: "/",
    });
  });

  it("renders the logo with a link to the homepage", () => {
    render(<Navbar />);

    const logoLink = screen.getByRole("link", { name: /logo/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");
  });

  it("renders the navigation links", () => {
    render(<Navbar />);

    const launchesLink = screen.getByRole("link", { name: /launches/i });
    const rocketsLink = screen.getByRole("link", { name: /rockets/i });

    expect(launchesLink).toBeInTheDocument();
    expect(launchesLink).toHaveAttribute("href", "/launches");

    expect(rocketsLink).toBeInTheDocument();
    expect(rocketsLink).toHaveAttribute("href", "/rockets");
  });

  it("applies the correct styles to the navbar", () => {
    const { container } = render(<Navbar />);

    const navbarElement = container.firstChild;
    expect(navbarElement).toHaveClass("flex justify-between bg-white p-4 shadow-lg");
  });

  it("renders the Image component with correct attributes", () => {
    render(<Navbar />);

    const image = screen.getByAltText("logo");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "logo");
  });
});
