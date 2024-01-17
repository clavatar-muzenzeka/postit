import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RootLayout from "@/app/layout";
import FooterComponent from "@/components/footerComponent";

describe("Footer", () => {
  it("Renders the footer component", () => {
    render(<FooterComponent />);

    const mainElement = screen.getByTestId("footer");

    expect(mainElement).toBeInTheDocument();
  });
});
