import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Card from "../Card";

describe("Card Component", () => {
  it("renders the title and description", () => {
    const mockTitle = "Test Title";
    const mockDescription = "This is a test description.";

    render(<Card title={mockTitle} description={mockDescription} />);

    // Check if the title is rendered
    const titleElement = screen.getByText(mockTitle);
    expect(titleElement.tagName).toBe("H2");

    // Check if the description is rendered
    const descriptionElement = screen.getByText(mockDescription);
    expect(descriptionElement.tagName).toBe("P");
  });

  it("applies the correct styles", () => {
    const mockTitle = "Styled Title";
    const mockDescription = "Styled description.";

    const { container } = render(
      <Card title={mockTitle} description={mockDescription} />
    );

    // Check for specific classes in the container
    const cardElement = container.firstChild;
    expect(cardElement).toHaveClass("group");
  });
});
