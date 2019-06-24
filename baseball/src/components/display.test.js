import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "./display.js";

describe("<Display/> Component Tests", () => {
  it("renders without crashing", () => {
    const renderTest = render(<Display />);
  });

  it("displays strikes and balls", () => {
    const display = render(<Display />);
    const balls = display.getByTestId("balls");
    const strikes = display.getByTestId("strikes");
    expect(balls).toHaveTextContent(/balls:/i);
    expect(strikes).toHaveTextContent(/strikes:/i);
  });
});
