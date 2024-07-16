import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import UserForm from "./UserForm";

jest.mock("axios");

test("submits user data and calls onUserUpdated", async () => {
    const mockOnUserUpdated = jest.fn();
    axios.put.mockResolvedValueOnce({});

    render(<UserForm onUserUpdated={mockOnUserUpdated} />);

    fireEvent.change(screen.getByLabelText(/ID/i), { target: { value: "1" } });
    fireEvent.change(screen.getByLabelText(/Name/i), {
        target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
        target: { value: "john@example.com" },
    });

    fireEvent.click(screen.getByText(/Update User/i));

    await waitFor(() => {
        expect(axios.put).toHaveBeenCalledWith(
            "http://localhost:3000/api/user",
            {
                id: 1,
                name: "John Doe",
                email: "john@example.com",
            }
        );

        expect(mockOnUserUpdated).toHaveBeenCalledWith({
            id: 1,
            name: "John Doe",
            email: "john@example.com",
        });
    });
});
