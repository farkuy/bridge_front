import type { ElementAccess } from "../type/router.type";
import { Paths } from "../type/router.type";
import { AdminPage, AuthPage, MainePage, ProfilePage } from "@/pages";

export const routerConfig: Record<Paths, ElementAccess> = {
  //Пути, доступные Всем
  [Paths.MAIN_PAGE]: { role: [], isForAuth: false, element: MainePage },

  //Пути, доступные зарегестрированным
  [Paths.USER_PAGE]: {
    role: ["USER", "ADMIN"],
    isForAuth: true,
    element: ProfilePage,
  },

  //Пути, доступные только администраторам
  [Paths.ADMIN_PAGE]: { role: ["ADMIN"], isForAuth: true, element: AdminPage },

  //Путь для переброса, если пользователь зашел на неавторизованную страницу
  [Paths.AUTH_PAGE]: { role: [], isForAuth: false, element: AuthPage },
};
