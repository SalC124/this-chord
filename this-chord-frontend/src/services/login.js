import axios from "axios";

const ip = import.meta.env.VITE_BACKEND_IP;
const baseURL = `http://${ip}:3001/api/login`;


const login = async (userCredentials) => {
  const loginResponse = await axios.post(baseURL, userCredentials);
  return loginResponse.data;
};

export default { login };
