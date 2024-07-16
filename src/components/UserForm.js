import React, { useState } from "react";
import axios from "axios";

const UserForm = ({ onUserUpdated }) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { id: parseInt(id, 10), name, email };
        await axios.put("http://localhost:3000/api/user", user);
        onUserUpdated(user);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="id">ID:</label>
                <input
                    id="id"
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">Update User</button>
        </form>
    );
};

export default UserForm;
