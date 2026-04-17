import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Form from "./Form";

describe("Registration Form Component", () => {

  beforeEach(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  it("RENDERS all registration fields", () => {
    render(<Form />);

    expect(screen.getByLabelText(/^name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date of birth/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/university name/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /register/i })).toBeInTheDocument();
  });

  it("SHOWS ERRORS for invalid input", () => {
    render(<Form />);

    const name = screen.getByLabelText(/^name/i);
    const email = screen.getByLabelText(/email/i);
    const dob = screen.getByLabelText(/date of birth/i);
    const phone = screen.getByLabelText(/phone number/i);
    const address = screen.getByLabelText(/address/i);
    const university = screen.getByLabelText(/university name/i);
    const button = screen.getByRole("button", { name: /register/i });

    // Fill invalid data but valid enough for browser validation (except required fields)
    fireEvent.change(name, { target: { value: "ab" } }); // < 3
    fireEvent.change(email, { target: { value: "test@example.com" } }); // valid email
    fireEvent.change(dob, { target: { value: "2020-01-01" } }); // < 18 years
    fireEvent.change(phone, { target: { value: "123" } }); // not 10 digits
    fireEvent.change(address, { target: { value: "abc" } }); // < 5
    fireEvent.change(university, { target: { value: "a" } }); // < 3

    fireEvent.click(button);

    expect(screen.getByText(/name must be at least 3 characters/i)).toBeInTheDocument();
    expect(screen.getByText(/you must be at least 18 years old/i)).toBeInTheDocument();
    expect(screen.getByText(/enter valid 10-digit phone number/i)).toBeInTheDocument();
    expect(screen.getByText(/address too short/i)).toBeInTheDocument();
    expect(screen.getByText(/university name required/i)).toBeInTheDocument();
    expect(screen.getByText(/please select a role/i)).toBeInTheDocument();
  });

  it("SUBMITS successfully with valid input", () => {
    render(<Form />);

    fireEvent.change(screen.getByLabelText(/^name/i), { target: { value: "Ankush Kumar" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "singhankush.j@gmail.com" } });
    fireEvent.change(screen.getByLabelText(/date of birth/i), { target: { value: "2006-03-06" } });
    fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: "7667853524" } });
    fireEvent.change(screen.getByLabelText(/address/i), { target: { value: "484 Sarpanch Colony" } });
    fireEvent.change(screen.getByLabelText(/university name/i), { target: { value: "Chandigarh University" } });

    // Select a role
    fireEvent.click(screen.getByLabelText(/student/i));

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    expect(window.alert).toHaveBeenCalledWith("Registration Successful!");
  });

});