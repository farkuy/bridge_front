import type { JSX } from "react";

export enum Paths {
  MAIN = "main",
  ADMIN_PAGE = "admin_page",
}
type Role = "USER" | "ADMIN";

export type ElementAccess = {
  element: () => JSX.Element;
  role: Role[];
};
