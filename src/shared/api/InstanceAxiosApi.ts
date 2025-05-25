import { Api } from "@/app/swagger/Api";
import axios, { isAxiosError } from "axios";
import { $authStore } from "@/entities/Authentication";

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

export function apiV1request<K extends keyof typeof ApiV1.api>(key: K) {
  try {
    return ApiV1.api[key];
  } catch (error) {
    if (isAxiosError(error)) {
      console.error("Что-то пошло не так");
    }

    //Добавить обновление токена при его протухании и перевызов реквеста
    throw error;
  }
}
