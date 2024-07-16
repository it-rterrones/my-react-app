import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserDisplay from "./components/UserDisplay";
import { getUserById } from "./api/userApi";

const App = () => {
    const [user, setUser] = useState(null);

    const handleUserUpdated = (updatedUser) => {
        setUser(updatedUser);
    };

    const handleLoadUser = async (id) => {
        const userData = await getUserById(id);
        setUser(userData);
    };

    return (
        <div>
            <h1>User Management</h1>
            <UserForm onUserUpdated={handleUserUpdated} />
            <div>
                <label htmlFor="load-user-id">Load User by ID:</label>
                <input
                    id="load-user-id"
                    type="text"
                    onBlur={(e) => handleLoadUser(e.target.value)}
                />
            </div>
            <UserDisplay user={user} />
        </div>
    );
};

export default App;
