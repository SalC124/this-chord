import axios from "axios";

const ip = (import.meta.env.VITE_BACKEND_IP)
  ? import.meta.env.VITE_BACKEND_IP
  : "localhost";
const baseURL = `http://${ip}:3001/api/msgs`;

const getMsgs = async () => {
  return await axios.get(baseURL).then((response) => response.data);
};

const addMsg = async (newMsg, token, time) => {
  return await axios
    .post(baseURL, { content: newMsg.trim(), time: time }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((response) => response.data);
};

const deleteMsg = async (id) => {
  return await axios.delete(`${baseURL}/${id}`).then((response) => response.data);
};

const updateMsg = async (id, updatedMsg) => {
  return await axios
    .put(`${baseURL}/${id}`, updatedMsg)
    .then((response) => response.data);
};

export default { getMsgs, addMsg, deleteMsg, updateMsg };
