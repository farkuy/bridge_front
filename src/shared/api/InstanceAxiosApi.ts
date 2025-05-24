import { $authStore } from "../../entities";
import { Api } from "../../app/swagger/Api";
import axios from "axios";

export const ApiV1 = new Api();

ApiV1.instance = axios.create({
  baseURL: process.env.BRIGDE_API,
  maxBodyLength: Infinity,
  timeout: 100000,
  headers: { "Content-Type": "application/json", Accept: "application/json" },
});

ApiV1.instance.interceptors.request.use((config) => {
  const token = $authStore.getState().accessToken;
  if (token) config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

export type ApiV1Keys = keyof typeof ApiV1.api;

export function apiV1request<K extends ApiV1Keys>(key: K) {
  const method = ApiV1.api[key];
  type MethodTypes = Parameters<typeof method>;

  return (...args: MethodTypes) => {
    try {
      return method(...args);
    } catch (error) {
      console.log(error);
    }
  };
}
