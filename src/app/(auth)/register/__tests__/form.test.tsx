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
      const errorMessage = screen.queryByTestId("email-error-message");
      expect(errorMessage).toHaveTextContent("Invalid email");
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
      const errorMessage = screen.queryByTestId("email-error-message");
      expect(errorMessage).toHaveTextContent("Cannot be empty");
    });
  });

  it("should not display an error when the email is valid", async () => {
    render(<RegisterForm />);

    const input = screen.getByLabelText("Email address");
    const submitButton = screen.getByRole("button", {
      name: "Create new account",
    });

    fireEvent.change(input, { target: { value: "validemail@email.com" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const errorMessage = screen.queryByTestId("email-error-message");
      expect(errorMessage).not.toBeInTheDocument();
    });
  });
});

describe("Registration form - password validation", () => {
  it("should display error message when password is empty", async () => {
    render(<RegisterForm />);

    const input = screen.getByLabelText("Create password");
    const submitButton = screen.getByRole("button", {
      name: "Create new account",
    });

    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const errorMessage = screen.queryByTestId("password-error-message");
      expect(errorMessage).toHaveTextContent("Cannot be empty");
    });
  });

  it("should display error message when password is less than 8 characters", async () => {
    render(<RegisterForm />);

    const input = screen.getByLabelText("Create password");
    const submitButton = screen.getByRole("button", {
      name: "Create new account",
    });

    fireEvent.change(input, { target: { value: "123" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const errorMessage = screen.queryByTestId("password-error-message");
      expect(errorMessage).toHaveTextContent("Too short");
    });
  });
});
