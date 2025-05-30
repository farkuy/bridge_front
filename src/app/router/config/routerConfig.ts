import type { ElementAccess } from "../type/router.type";
import { MainePage, AdminPage } from "@/pages";
import { Paths } from "../type/router.type";

export const routerConfig: Record<Paths, ElementAccess> = {
  [Paths.MAIN]: { role: ["USER"], element: MainePage },
  [Paths.ADMIN_PAGE]: { role: ["ADMIN"], element: AdminPage },
};
