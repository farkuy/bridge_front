import { $authStore } from "../../entities";
import { Api } from "../../app/swagger/Api";

export const ApiV1 = new Api();

ApiV1.instance.create({
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

export function request(key: ApiV1Keys) {
  return ApiV1.api[key];
}
