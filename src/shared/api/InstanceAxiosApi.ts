import axios from "axios";
import { $authStore } from "../../entities";

export const $axios = axios.create({
  baseURL: process.env.BRIGDE_API,
  maxBodyLength: Infinity,
  timeout: 100000,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  //withCredentials: true,
});

$axios.interceptors.request.use((config) => {
  const token = $authStore.getState().accessToken;
  if (token) config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});
