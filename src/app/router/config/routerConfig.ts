import type { ElementAccess } from "../type/router.type";
import { Paths } from "../type/router.type";
import { AdminPage, MainePage } from "@/pages";

export const routerConfig: Record<Paths, ElementAccess> = {
  [Paths.MAIN_PAGE]: { role: ["USER"], element: MainePage },
  [Paths.ADMIN_PAGE]: { role: ["ADMIN"], element: AdminPage },
};
