import type { ElementAccess } from "../type/router.type";
import { Paths } from "../type/router.type";
import { AdminPage, AuthPage, MainePage } from "@/pages";

export const routerConfig: Record<Paths, ElementAccess> = {
  //Пути, доступные обычным пользователям
  [Paths.MAIN_PAGE]: { role: ["USER"], isForAuth: false, element: MainePage },

  //Пути, доступные только администраторам
  [Paths.ADMIN_PAGE]: { role: ["ADMIN"], isForAuth: true, element: AdminPage },

  //Путь для переброса, если пользователь зашел на неавторизованную страницу
  [Paths.AUTH_PAGE]: { role: [], isForAuth: false, element: AuthPage },
};
