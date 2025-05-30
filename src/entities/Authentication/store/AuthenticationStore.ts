import { createEvent, createStore } from "effector";

interface AuthenticationStore {
  accessToken: string;
}

export const $authStore = createStore<AuthenticationStore>({
  accessToken: localStorage.getItem("accessToken") || "",
});

export const clearAuth = createEvent();

export const setAccessToken = createEvent<string>();

$authStore
  .on(setAccessToken, (_, accessToken) => {
    localStorage.setItem("accessToken", accessToken);
    return { ..._, accessToken };
  })
  .on(clearAuth, (_) => {
    return {
      accessToken: "",
    };
  });
