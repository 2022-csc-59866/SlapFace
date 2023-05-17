import React from 'react'

import { render, screen } from "@testing-library/react";
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import News from "../components/News/News";

/* This is a test that is testing the App component. 
 * It is testing that the heading is correct. */
describe("App", () => {
  it("should have exact heading", () => {

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
    /* Rendering the App component. */
    const { container } = render(<News />);

    /* Getting the element with the test id of "app-header-heading". */
    const mainHeading = screen.getByTestId("news-header-heading");

    /* Checking that the innerHTML of the element with the test id of "app-header-heading" is equal to
    "Productivity Tracker". */
    expect(mainHeading.innerHTML).toBe("Trending News");
  });
});