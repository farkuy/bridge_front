import { createEvent, createStore } from "effector";
import type { User } from "../type/user.type";
import { USER_STORAGE_KEY } from "../const/const";
import { clearAuth } from "../../Authentication/index";

const userFromStorage = localStorage.getItem(USER_STORAGE_KEY);

export const $user = createStore<User | null>(
  userFromStorage ? JSON.parse(userFromStorage) : null,
);

export const setUser = createEvent<User | null>();

$user
  .on(setUser, (_, newData) => {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newData));
    return newData;
  })
  .on(clearAuth, (_) => {
    localStorage.removeItem(USER_STORAGE_KEY);
    return null;
  });
