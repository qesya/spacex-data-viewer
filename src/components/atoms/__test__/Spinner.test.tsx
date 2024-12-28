import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Spinner from '../Spinner';

describe("Spinner component", () => {
  it("renders a spinner element", () => {
    // Render the Spinner component
    render(<Spinner />);

    // Check if the outer div is present with the correct class
    const container = screen.getByTestId("spinner");
    expect(container).toHaveClass("flex h-full justify-center items-center");

    // Check if the spinning div is present with the correct class
    const spinner = container.firstChild;
    expect(spinner).toHaveClass("animate-spin");
  });
});
