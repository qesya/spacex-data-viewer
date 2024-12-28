import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Text from "../Text";

describe("Text component", () => {
  it("renders the default 'span' element", () => {
    render(<Text>Default Text</Text>);
    const element = screen.getByText("Default Text");
    expect(element.tagName).toBe("SPAN");
  });

  it("renders the specified element type using the 'as' prop", () => {
    render(<Text as="h1">Heading Text</Text>);
    const element = screen.getByText("Heading Text");
    expect(element.tagName).toBe("H1");
  });

  it("applies additional props to the rendered element", () => {
    render(
      <Text as="p" id="test-id" data-testid="text">
        Paragraph Text
      </Text>
    );
    const element = screen.getByText("Paragraph Text");
    expect(element).toHaveAttribute("id", "test-id");
    expect(element).toHaveAttribute("data-testid", "text");
  });

  it("applies the 'className' prop", () => {
    render(
      <Text as="div" className="custom-class">
        Div Text
      </Text>
    );
    const element = screen.getByText("Div Text");
    expect(element).toHaveClass("custom-class");
  });

  it("renders children correctly", () => {
    render(<Text as="p">Hello, world!</Text>);
    const element = screen.getByText("Hello, world!");
    expect(element).toBeInTheDocument();
  });
});
