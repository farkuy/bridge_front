import { Api } from "@/app/swagger/Api";
import axios from "axios";
import { $authStore, setAccessToken } from "@/entities/Authentication";

export const ApiV1 = new Api();

ApiV1.instance = axios.create({
  baseURL: process.env.BRIGDE_API,
  maxBodyLength: Infinity,
  timeout: 100000,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  withCredentials: true,
});

ApiV1.instance.interceptors.request.use((config) => {
  const token = $authStore.getState().accessToken;
  if (token) config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

ApiV1.instance.interceptors.response.use((response) => {
  const authorizationHeader = response.headers["authorization"];
  if (authorizationHeader) {
    const [Bearer, token] = authorizationHeader.split(" ");
    if (!Bearer || !token) throw new Error("Нужно переавторизоваться");
    if (token) setAccessToken(token);
  }
  return response;
});
