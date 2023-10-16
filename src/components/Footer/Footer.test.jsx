import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("It shows the name of the Google on screen", () => {
    render(<Footer />);

    const title = screen.getByText("@Google 2021");
    expect(title).toBeInTheDocument();
  });

  it("It shows the name of the version of the test on screen", () => {
    render(<Footer />);

    const title = screen.getByText("Version 0.1.0");
    expect(title).toBeInTheDocument();
  });
});
