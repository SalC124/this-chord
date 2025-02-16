import axios from "axios";

const ip = (import.meta.env.VITE_BACKEND_IP)
  ? import.meta.env.VITE_BACKEND_IP
  : "localhost";
const baseURL = `http://${ip}:3001/api/msgs`;

const getMsgs = () => {
  return axios.get(baseURL).then((response) => response.data);
};

const addMsg = (newMsg, token) => {
  return axios
    .post(baseURL, { content: newMsg.trim() }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response) => response.data);
};

const deleteMsg = (id) => {
  return axios.delete(`${baseURL}/${id}`).then((response) => response.data);
};

const updateMsg = (id, updatedMsg) => {
  return axios
    .put(`${baseURL}/${id}`, updatedMsg)
    .then((response) => response.data);
};

export default { getMsgs, addMsg, deleteMsg, updateMsg };
