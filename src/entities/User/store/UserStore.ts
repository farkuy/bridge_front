import { createEvent, createStore } from "effector";
import type { UserResponseDto } from "@/app/swagger/Api";

type User = Omit<UserResponseDto, "accessToken">;

export const $user = createStore<User>({ email: "", id: -1, roles: [] });

export const setUser = createEvent<User>();

$user.on(setUser, (_, newData) => newData);
