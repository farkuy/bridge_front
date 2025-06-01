import { BrowserRouter, Route, Routes } from "react-router";
import { routerConfig } from "./config/routerConfig";
import { useUnit } from "effector-react";
import { $user } from "@/entities/User";
import { RouteAuthGuard } from "./ui/RouteGuard/RouteGuard";
import type { ElementAccess } from "./type/router.type";
import type { ReactNode } from "react";
import { useCallback } from "react";
import { MainePage } from "@/pages";

export const AppRouter = () => {
  const [user] = useUnit([$user]);

  const definePath = useCallback(
    (path: string, other: ElementAccess): ReactNode => {
      const { element: Component } = other;
      return (
        <Route
          key={path}
          path={path}
          element={
            <RouteAuthGuard user={user} {...other}>
              <Component />
            </RouteAuthGuard>
          }
        />
      );
    },
    [user],
  );

  return (
    <BrowserRouter>
      <Routes>
        {Object.entries(routerConfig).map(([path, other]) =>
          definePath(path, other),
        )}
        <Route path={"*"} element={<MainePage />} />
      </Routes>
    </BrowserRouter>
  );
};
