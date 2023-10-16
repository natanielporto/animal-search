import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MainSearch } from "./MainSearch";
import { MemoryRouter } from "react-router-dom";

const renderMainSearch = () => {
  return render(
    <MemoryRouter>
      <MainSearch />
    </MemoryRouter>
  );
};

describe("MainSearch", () => {
  it("It shows the image of Google on screen", () => {
    renderMainSearch();

    const googleImage = screen.getByRole("img");
    expect(googleImage).toBeInTheDocument();
  });

  it("It shows the alt text of Google image", () => {
    renderMainSearch();

    const googleImageAltText = screen.getByAltText("Google Logo");
    expect(googleImageAltText).toBeInTheDocument();
  });

  it("It shows the button 'Buscar' on the screen", () => {
    renderMainSearch();

    const button = screen.getByText("Buscar");
    expect(button).toBeInTheDocument();
  });

  it("It finds the input", () => {
    renderMainSearch();

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });
});
