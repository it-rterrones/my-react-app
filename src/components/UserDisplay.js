import React from "react";

const UserDisplay = ({ user }) => {
    if (!user) return <div>No user data available.</div>;

    return (
        <div>
            <h2>User Info</h2>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserDisplay;
