import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("It shows the name of the company on screen", () => {
    render(<Header />);

    const title = screen.getByText("AgileContent");
    expect(title).toBeInTheDocument();
  });

  it("It shows the name of the test on screen", () => {
    render(<Header />);

    const title = screen.getByText("Frontend test");
    expect(title).toBeInTheDocument();
  });
});
