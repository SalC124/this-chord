import axios from "axios";

const ip = "67.84.35.204";
const baseURL = `http://${ip}:3001/api/login`;


const login = async (userCredentials) => {
  const loginResponse = await axios.post(baseURL, userCredentials);
  return loginResponse.data;
};

export default { login };
