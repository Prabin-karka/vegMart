import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://raw.githubusercontent.com/Prabin-karka/veg_mart/refs/heads/main/db.json",
});

export default axiosInstance;