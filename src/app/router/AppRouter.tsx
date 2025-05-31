import { BrowserRouter, Route, Routes } from "react-router";
import { routerConfig } from "./config/routerConfig";
import { useUnit } from "effector-react";
import { $user } from "@/entities/User";
import { hasAccessPath } from "./utils/hasAccessPath";
import { MainePage } from "@/pages";

export const AppRouter = () => {
  const [user] = useUnit([$user]);

  return (
    <BrowserRouter>
      <Routes>
        {Object.entries(routerConfig).map(
          ([path, { role, element: Component }]) => {
            const component = <Component />;
            const hasAccess = hasAccessPath(role, user?.roles);
            return hasAccess ? (
              <Route path={path} key={path} element={component} />
            ) : (
              <Route path={"*"} element={<MainePage />} />
            );
          },
        )}
      </Routes>
    </BrowserRouter>
  );
};
