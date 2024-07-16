import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import App from "./App";

jest.mock("axios");

test("loads user data when user ID is provided", async () => {
    const user = { id: 1, name: "John Doe", email: "john@example.com" };
    axios.get.mockResolvedValueOnce({ data: user });

    render(<App />);

    fireEvent.blur(screen.getByLabelText(/Load User by ID:/i), {
        target: { value: "1" },
    });

    expect(await screen.findByText(/ID: 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Name: John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/Email: john@example.com/i)).toBeInTheDocument();
});
