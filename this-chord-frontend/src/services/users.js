import axios from "axios";

const ip = (import.meta.env.VITE_BACKEND_IP)
  ? import.meta.env.VITE_BACKEND_IP
  : "localhost";
const baseURL = `http://${ip}:3001/api/users`;

const getUsers = () => {
  return axios.get(baseURL).then((response) => response.data);
};

const addUser = (newUser) => {
  return axios
    .post(baseURL, { name: newUser.trim() })
    .then((response) => response.data);
};

const deleteUser = (id) => {
  return axios.delete(`${baseURL}/${id}`).then((response) => response.data);
};

const updateUser = (id, updatedUser) => {
  return axios
    .put(`${baseURL}/${id}`, updatedUser)
    .then((response) => response.data);
};

export default { ip, getUsers, addUser, deleteUser, updateUser };
