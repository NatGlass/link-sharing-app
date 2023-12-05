import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import RegisterForm from "../_components/form";

describe("Registration form - email validation", () => {
  it("should display error message when email is invalid on submit", async () => {
    render(<RegisterForm />);

    const input = screen.getByLabelText("Email address");
    const submitButton = screen.getByRole("button", {
      name: "Create new account",
    });

    // Simulate user input and form submission
    fireEvent.change(input, { target: { value: "invalid-email" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const errorMessage = screen.getByText("Invalid email");
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it("should display error message when email is empty", async () => {
    render(<RegisterForm />);

    const input = screen.getByLabelText("Email address");
    const submitButton = screen.getByRole("button", {
      name: "Create new account",
    });

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const errorMessage = screen.getByText("Cannot be empty");
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
