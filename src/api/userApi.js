import axios from "axios";

export const getUserById = async (id) => {
    const response = await axios.get(`http://localhost:3000/api/user/${id}`);
    return response.data;
};

export const updateUser = async (user) => {
    const response = await axios.put("http://localhost:3000/api/user", user);
    return response.data;
};
