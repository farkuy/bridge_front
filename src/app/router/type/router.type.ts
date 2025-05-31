import type { JSX } from "react";

//TODO избавиться от игнора
// @ts-ignore
export enum Paths {
  MAIN_PAGE = "/",
  ADMIN_PAGE = "/admin",
  AUTH_PAGE = "/auth",
}

//TODO генерировать доступные роли
export type Role = "USER" | "ADMIN";

export type ElementAccess = {
  element: () => JSX.Element;
  isForAuth: boolean;
  role: Role[];
};
