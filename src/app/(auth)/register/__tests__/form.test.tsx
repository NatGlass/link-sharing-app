import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import RegisterForm from "../_components/form";

describe("Registration form - email validation", () => {
  it("should display error message when email is invalid", () => {
    render(<RegisterForm />);

    const input = screen.getByLabelText("Email address");

    fireEvent.change(input, { target: { value: "invalid-email" } });
    fireEvent.blur(input);

    const errorMessage = screen.getByText("Email is invalid");
    expect(errorMessage).toBeInTheDocument();
  });
});
