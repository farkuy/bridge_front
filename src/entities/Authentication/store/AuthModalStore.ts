import { createEvent, createStore } from "effector";

export const $isShowAuth = createStore(false);

export const setIsShowAuth = createEvent<boolean>();

$isShowAuth.on(setIsShowAuth, (_, val) => val);
