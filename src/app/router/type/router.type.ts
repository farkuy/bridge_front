import type { ComponentType } from "react";

//TODO избавиться от игнора
// @ts-ignore
export enum Paths {
  MAIN_PAGE = "/",
  ADMIN_PAGE = "/admin",
  AUTH_PAGE = "/auth",
  USER_PAGE = "/user",
}

//TODO генерировать доступные роли
export type Role = "USER" | "ADMIN";

export type ElementAccess = {
  element: ComponentType;
  isForAuth: boolean;
  role: Role[];
};
