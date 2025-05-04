import axios from "axios";

export const BASE_URL = "https://property-marketplace-backend.onrender.com";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("userToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// apiClient.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response?.status === 401) {
//       sessionStorage.removeItem("userToken");
//       window.location.href = "/auth?mode=signin";
//     }
//     return Promise.reject(error);
//   }
// );

export default apiClient;
