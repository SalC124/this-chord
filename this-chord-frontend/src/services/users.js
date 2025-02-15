import axios from "axios";

const baseURL = "http://localhost:3001/api/users";

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

export default { getUsers, addUser, deleteUser, updateUser };
