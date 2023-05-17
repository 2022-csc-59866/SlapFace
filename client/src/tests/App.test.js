import React from 'react'

import { render, screen } from "@testing-library/react";
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import NewsRow from "../components/News/NewsRow";

/* This is a test that is testing the App component. 
 * It is testing that the heading is correct. */
describe("App", () => {
  it("should have exact heading", () => {
    /* Rendering the App component. */
    const { container } = render(<NewsRow />);

    /* Getting the element with the test id of "app-header-heading". */
    const mainHeading = screen.getByTestId("news-header-heading");

    /* Checking that the innerHTML of the element with the test id of "app-header-heading" is equal to
    "Productivity Tracker". */
    expect(mainHeading.innerHTML).toBe("Trending News");
  });
});