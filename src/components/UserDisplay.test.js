import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import UserDisplay from "./UserDisplay";

test("displays user information", () => {
    const user = { id: 1, name: "John Doe", email: "john@example.com" };

    render(<UserDisplay user={user} />);

    expect(screen.getByText(/ID:/i)).toHaveTextContent("ID: 1");
    expect(screen.getByText(/Name:/i)).toHaveTextContent("Name: John Doe");
    expect(screen.getByText(/Email:/i)).toHaveTextContent(
        "Email: john@example.com"
    );
});

test("displays no user data message", () => {
    render(<UserDisplay user={null} />);

    expect(screen.getByText(/No user data available./i)).toBeInTheDocument();
});
