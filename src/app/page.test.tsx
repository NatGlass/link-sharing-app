import { render, screen } from "@testing-library/react";
import Home from "./page";

it("Should render the heading", () => {
  render(<Home />);
  expect(screen.getByText("Testing 1 2 3")).toBeInTheDocument();
});
