import axios from "axios";

const instance = axios.create({
  baseURL: "https://netflix-backend-fim6.onrender.com/api/",
});

export default instance;
