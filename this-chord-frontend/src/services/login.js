import axios from "axios";

const baseURL = "http://localhost:3001/api/login";


const login = async (userCredentials) => {
  const loginResponse = await axios.post(baseURL, userCredentials);
  return loginResponse.data;
};

export default { login };
