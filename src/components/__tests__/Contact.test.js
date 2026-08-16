import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ContactUs } from "../ContactUs";

afterEach(() => {
  cleanup();
});

describe("Contact us test cases", () => {
  beforeAll(() => {
    console.log("before alllllllllllllllllllll");
  });
  beforeEach(() => {
    console.log("before Eachhhhhhhhhhhhhhh");
  });
  afterAll(() => {
    console.log("after alllllllllllllllllllll");
  });
  afterEach(() => {
    console.log("after Eachhhhhhhhhhhhhhh");
  });
  it("Should load contact us component", () => {
    render(<ContactUs />);
    //Querying
    const heading = screen.getByRole("heading", {
      name: "Contact Us",
    });
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside the contact us component", () => {
    render(<ContactUs />);
    const button = screen.getByRole("button");
    //   const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("Should load input name placeholder inside the contact us component", () => {
    render(<ContactUs />);
    const button = screen.getByPlaceholderText("message");
    //   const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
  });

  test("should load 2 input boxes in the contact us component", () => {
    render(<ContactUs />);
    const input = screen.getAllByRole("textbox");
    console.log(input.length);
    // expect(input.length).not.toBe(3);
    expect(input.length).toBe(2);
  });
});
