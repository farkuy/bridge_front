import { createEvent, createStore } from "effector";

interface AuthenticationStore {
  accessToken: string;
}

export const $authStore = createStore<AuthenticationStore>({
  accessToken: "",
});

export const setAccessToken = createEvent<string>();

$authStore.on(setAccessToken, (_, accessToken) => ({ ..._, accessToken }));
