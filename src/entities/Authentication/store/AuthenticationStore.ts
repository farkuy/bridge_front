import { createEvent, createStore } from "effector";

interface AuthenticationStore {
  refreshToken: string;
  accessToken: string;
}

export const $authStore = createStore<AuthenticationStore>({
  refreshToken: "",
  accessToken: "",
});

export const setRefreshToken = createEvent<string>();
export const setAccessToken = createEvent<string>();

$authStore.on(setRefreshToken, (_, refreshToken) => ({ ..._, refreshToken }));
$authStore.on(setAccessToken, (_, accessToken) => ({ ..._, accessToken }));
