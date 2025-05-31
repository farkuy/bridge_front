import type { JSX } from "react";

export enum Paths {
  MAIN_PAGE = "/",
  ADMIN_PAGE = "/admin",
}
export type Role = "USER" | "ADMIN";

export type ElementAccess = {
  element: () => JSX.Element;
  role: Role[];
};
