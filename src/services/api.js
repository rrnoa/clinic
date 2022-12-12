import axios from "axios";
const apiClient = axios.create({
  baseURL: "http://clinica.test/api",
  //withCredentials: true,
});
export default apiClient;
