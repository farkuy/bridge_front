import { BrowserRouter, Route, Routes } from "react-router";
import { routerConfig } from "@/app/router/config/routerConfig";
import { useUnit } from "effector-react";
import { $user } from "@/entities/User";

const AppRouter = () => {
  const [user] = useUnit([$user]);
  return (
    <BrowserRouter>
      <Routes>
        {Object.entries(routerConfig).map(
          ([path, { role, element: Component }]) => {
            const component = <Component />;
            const hasAccess ?
              return <Route path={path} key={path} element={component} />;
          },
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
