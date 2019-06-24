import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("Dashboard tests", () => {
  it("component render", () => {
    const renderTest = render(<Dashboard />);
  });
  it("render ball, strike, foul, hit buttons", () => {
    const dashboard = render(<Dashboard />);
    const ballButton = dashboard.getByText(/ball/i);
    const strikeButton = dashboard.getByText(/strike/i);
    const foulButton = dashboard.getByText(/foul/i);
    const hitButton = dashboard.getByText(/hit/i);

    expect(ballButton).toHaveTextContent(/ball/i);
    expect(strikeButton).toHaveTextContent(/strike/i);
    expect(foulButton).toHaveTextContent(/foul/i);
    expect(hitButton).toHaveTextContent(/hit/i);
  });
});
