import { AppConfig } from "@/AppConfig";
import router from "@/router";
import axios from "axios";

export const request = axios.create({
  baseURL: AppConfig.apiUrl,
  withCredentials: true, // needed to send cookies (for refresh token)
});

request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userToken");
    // const { cookies } = useCookies();

    // setCookie("authorization", `Bearer ${token}`);

    // cookies.set("authorization", `Bearer ${token}`);
    if (config.headers && token) {
      config.headers["authorization"] = `Bearer ${token}`;
    }
    if (config.headers?.["NoAuthorization"]) {
      delete config.headers["Authorization"];
      delete config.headers["NoAuthorization"];
    }
    config.params = {
      ...(config.params || {}),
      time: Date.now(),
    };
    return config;
  },
  (error) => {
    return error;
    // return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    console.log("🚀 ~ originalRequest:", originalRequest);

    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          "http://localhost:3000/authentication/refresh",
          {},
          { withCredentials: true }
        );

        const newToken = res.data.accessToken;
        localStorage.setItem("userToken", newToken);

        // Retry original request with new token
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return request(originalRequest);
      } catch (refreshError) {
        console.error("Refresh failed", refreshError);
        localStorage.removeItem("userToken");
        router.push("/login");
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
  // (response) => {
  //   if (response.data.statusCode === 401) {
  //     // const authStore = useAuthStore();
  //     // authStore.userLogout();

  //     localStorage.removeItem("userToken")
  //     router.push("/login");
  //   }
  //   return response;
  // },
  // (error) => {
  //   if (error.response?.status === 401) {
  //       // deleteUserToken();
  //       localStorage.removeItem("userToken")
  //       router.push("/login");
  //   }
  //   return error;
  // }
);
