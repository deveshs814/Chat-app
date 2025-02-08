import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5001"; 

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,  // Ensure cookies are sent if using authentication
});
