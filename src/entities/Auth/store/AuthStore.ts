import {createEvent, createStore} from "effector";

interface AuthStore {
    refreshToken: string;
    accessToken: string;
}

export const $authStore = createStore<AuthStore>({
    refreshToken: '',
    accessToken: '',
})

const setRefreshToken = createEvent<string>()
const setAccessToken = createEvent<string>()

$authStore.on(setRefreshToken, (_, refreshToken) => ({..._, refreshToken}));
$authStore.on(setAccessToken, (_, accessToken ) => ({..._, accessToken}));