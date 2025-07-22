import axios, { type AxiosRequestHeaders } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://www.blockguard.shop/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");

    // 로그인, 회원가입 요청은 제외
    const isAuthRoute =
      config.url?.includes("/login") || config.url?.includes("/auth/signup");

    if (token && !isAuthRoute) {
      if (!config.headers) config.headers = {} as AxiosRequestHeaders;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
