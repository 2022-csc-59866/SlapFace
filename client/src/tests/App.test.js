import React from 'react'

import { render, screen } from "@testing-library/react";
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import News from "../components/News/News";
import {NewsRow} from "../components/News/NewsRow";


describe("App", () => {
  it("News: should have exact heading", () => {
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
    const { container } = render(<News />);

    const mainHeading = screen.getByTestId("news-header-heading");
    expect(mainHeading.innerHTML).toBe("Trending News");
  });


  it("News: should have inputed data", () => {
    const data = {
      url: "123",
      title: "321",
      urlToImage: "123123",
      description: "description"
    }
    const { container } = render(<NewsRow article={data} />);

    const title = screen.getByText("321");
    expect(title.innerHTML).toBe("321");
  });



});