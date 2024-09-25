import { render, screen } from "@testing-library/react";
import React from "react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us Test case", () => {
  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    //Assertion
    expect(button).toBeInTheDocument();
  });
  // it and test are same
  it("Should load  2 button inside component", () => {
    //render
    render(<Contact />);

    //query
    const input = screen.getAllByRole("textbox");

    //Assertion
    expect(input.length).toBe(2);
  });
});
